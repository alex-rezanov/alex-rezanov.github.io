import { afterNextRender, ChangeDetectionStrategy, Component, computed, DestroyRef, effect, inject, Injector, signal } from '@angular/core';
import { DOCUMENT, NgTemplateOutlet } from '@angular/common';
import { ALEX_DETAILS } from '../../constants';
import { NavigationSection } from '../../enums';
import { ActiveSessionStore } from '../../../core/services';
import { filter, map, Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-side-bar',
  imports: [MatIconButton, MatIcon, NgTemplateOutlet],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarComponent {
  protected readonly alexDetails = ALEX_DETAILS;

  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly activeSessionStore = inject(ActiveSessionStore);
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private readonly injector = inject(Injector);
  private observer: IntersectionObserver | null = null;

  protected readonly sideBarItems = this.activeSessionStore.sideBarItems;
  protected readonly isSidebarEmpty = this.activeSessionStore.isSidebarEmpty;
  protected readonly isNameVisible = toSignal(this.getIsNameVisible());
  protected readonly activeLink = signal<string | null>(this.sideBarItems()[0]?.link);
  private readonly activeSection = signal<string | null>(this.sideBarItems()[0]?.link);
  protected readonly isFooterActive = computed(() => this.activeSection() === NavigationSection.FOOTER);
  protected readonly isMenuOpen = signal(false);
  // Tracks which link we are programmatically scrolling to; null means free scrolling
  private readonly scrollingToLink = signal<string | null>(null);

  private footerObserver: IntersectionObserver | null = null;
  // Tracks which nav sections are currently intersecting the middle band of the viewport
  private readonly visibleSections = new Set<string>();

  constructor() {
    this.linkEffect();
    this.destroyRef.onDestroy(() => this.teardownObservers());
  }

  private readonly mobileBarHeight = 100;
  private readonly mobileBreakpoint = 640;

  protected scrollTo(link: string): void {
    const targetElement = this.document.getElementById(link);
    if (!targetElement) {
      return;
    }

    this.activeLink.set(link);
    const rect = targetElement.getBoundingClientRect();
    const isMobile = window.innerWidth <= this.mobileBreakpoint;
    const offset = isMobile ? this.mobileBarHeight : 0;
    const alreadyInView = rect.top >= offset && rect.bottom <= window.innerHeight;

    if (alreadyInView) {
      return;
    }

    this.scrollingToLink.set(link);
    window.scrollTo({ top: rect.top + window.scrollY - offset, behavior: 'smooth' });
  }

  protected onNavClick(event: Event, link: string): void {
    event.preventDefault();
    this.isMenuOpen.set(false);
    this.scrollTo(link);
  }

  protected toggleMenu(): void {
    this.isMenuOpen.update(open => !open);
  }

  protected onBackToHomeClick(): void {
    this.router.navigate(['/', 'home']);
  }

  protected onScrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private getIsNameVisible(): Observable<boolean> {
    return this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(() => {
        let route = this.activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
          if (route.snapshot.data?.['isNameVisible']) {
            return true;
          }
        }
        return !!this.activatedRoute.snapshot.data?.['isNameVisible'];
      })
    );
  }

  private linkEffect(): void {
    effect(() => {
      const items = this.sideBarItems();
      this.teardownObservers();
      this.activeLink.set(items[0]?.link ?? null);
      this.activeSection.set(items[0]?.link ?? null);
      this.scrollingToLink.set(null);
      this.visibleSections.clear();
      afterNextRender(() => this.initializeObserver(), { injector: this.injector });
    });
  }

  private initializeObserver(): void {
    const sections = this.sideBarItems()
      .map(sideBarItem => this.document.getElementById(sideBarItem.link))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) {
      return;
    }

    // Use a rootMargin that creates a narrow horizontal band in the centre of the
    // viewport (-40% top & bottom). This means even very tall sections will fire
    // as soon as they occupy that central strip, fixing the "Selected Work never
    // activates" problem.
    this.observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.visibleSections.add(entry.target.id);
          } else {
            this.visibleSections.delete(entry.target.id);
          }
        }

        if (!this.visibleSections.size) {
          return;
        }

        // Pick the topmost visible section (closest to top of document)
        const topmost = sections
          .filter(s => this.visibleSections.has(s.id))
          .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top)[0];

        if (!topmost) {
          return;
        }

        const scrollingTo = this.scrollingToLink();

        if (scrollingTo === null) {
          // Free scrolling — always update to topmost visible section
          this.activeLink.set(topmost.id);
        } else if (this.visibleSections.has(scrollingTo)) {
          // Reached the programmatic scroll target — update and unlock
          this.activeLink.set(scrollingTo);
          this.scrollingToLink.set(null);
        }
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    sections.forEach(section => this.observer?.observe(section));

    // Separate observer for the footer with threshold:0 so we react the instant
    // the footer enters OR leaves the viewport — fixing the scroll-up delay.
    const footerSection = this.document.getElementById(NavigationSection.FOOTER);
    if (footerSection) {
      this.footerObserver = new IntersectionObserver(
        entries => {
          const isFooterVisible = entries.some(e => e.intersectionRatio >= 0.5);
          this.activeSection.set(isFooterVisible ? NavigationSection.FOOTER : null);
        },
        { threshold: 0.5 }
      );
      this.footerObserver.observe(footerSection);
    }
  }

  private teardownObservers(): void {
    this.observer?.disconnect();
    this.observer = null;
    this.footerObserver?.disconnect();
    this.footerObserver = null;
  }
}
