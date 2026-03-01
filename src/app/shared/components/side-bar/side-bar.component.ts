import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ALEX_DETAILS, SIDE_BAR_ITEMS } from '../../constants';
import { HomeSection } from '../../enums';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarComponent {
  protected readonly alexDetails = ALEX_DETAILS;

  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private observer: IntersectionObserver | null = null;

  protected readonly sideBarItems = SIDE_BAR_ITEMS;
  protected readonly activeLink = signal<string | null>(SIDE_BAR_ITEMS[0].link);
  private readonly activeSection = signal<string | null>(SIDE_BAR_ITEMS[0].link);
  protected readonly isFooterActive = computed(() => this.activeSection() === HomeSection.FOOTER);
  // Tracks which link we are programmatically scrolling to; null means free scrolling
  private readonly scrollingToLink = signal<string | null>(null);

  private footerObserver: IntersectionObserver | null = null;
  // Tracks which nav sections are currently intersecting the middle band of the viewport
  private readonly visibleSections = new Set<string>();

  constructor() {
    afterNextRender(() => this.initializeObserver());
  }

  private initializeObserver(): void {
    const sections = this.sideBarItems
      .map((sideBarItem) => this.document.getElementById(sideBarItem.link))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) {
      return;
    }

    // Use a rootMargin that creates a narrow horizontal band in the centre of the
    // viewport (-40% top & bottom). This means even very tall sections will fire
    // as soon as they occupy that central strip, fixing the "Selected Work never
    // activates" problem.
    this.observer = new IntersectionObserver(
      (entries) => {
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
          .filter((s) => this.visibleSections.has(s.id))
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
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 },
    );

    sections.forEach((section) => this.observer?.observe(section));

    // Separate observer for the footer with threshold:0 so we react the instant
    // the footer enters OR leaves the viewport — fixing the scroll-up delay.
    const footerSection = this.document.getElementById(HomeSection.FOOTER);
    if (footerSection) {
      this.footerObserver = new IntersectionObserver(
        (entries) => {
          const isFooterVisible = entries.some((e) => e.intersectionRatio >= 0.5);
          this.activeSection.set(isFooterVisible ? HomeSection.FOOTER : null);
        },
        { threshold: 0.5 },
      );
      this.footerObserver.observe(footerSection);
    }

    this.destroyRef.onDestroy(() => {
      this.observer?.disconnect();
      this.observer = null;
      this.footerObserver?.disconnect();
      this.footerObserver = null;
    });
  }

  protected scrollTo(link: string): void {
    const targetElement = this.document.getElementById(link);
    if (!targetElement) {
      return;
    }

    this.activeLink.set(link);
    const rect = targetElement.getBoundingClientRect();
    const alreadyInView = rect.top >= 0 && rect.bottom <= window.innerHeight;

    if (alreadyInView) {
      return;
    }

    this.scrollingToLink.set(link);
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  protected onNavClick(event: Event, link: string): void {
    event.preventDefault();
    this.scrollTo(link);
  }
}
