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
import { SIDE_BAR_ITEMS } from '../../constants';
import { HomeSection } from '../../enums';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarComponent {
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private observer: IntersectionObserver | null = null;

  protected readonly sideBarItems = SIDE_BAR_ITEMS;
  protected readonly activeLink = signal<string | null>(SIDE_BAR_ITEMS[0].link);
  private readonly activeSection = signal<string | null>(SIDE_BAR_ITEMS[0].link);
  protected readonly isFooterActive = computed(() => this.activeSection() === HomeSection.FOOTER);
  // Tracks which link we are programmatically scrolling to; null means free scrolling
  private readonly scrollingToLink = signal<string | null>(null);

  constructor() {
    afterNextRender(() => this.initializeObserver());
  }

  private initializeObserver(): void {
    const sections = this.sideBarItems
      .map((sideBarItem) => this.document.getElementById(sideBarItem.link))
      .filter(Boolean) as HTMLElement[];

    const footerSection = this.document.getElementById(HomeSection.FOOTER);
    if (footerSection) {
      sections.push(footerSection);
    }

    if (!sections.length) {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (!visibleEntry) {
          return;
        }

        const target = visibleEntry.target.id;
        this.activeSection.set(target);

        if (target === HomeSection.FOOTER) {
          return;
        }

        const scrollingTo = this.scrollingToLink();

        if (scrollingTo === null) {
          // Free scrolling — always update
          this.activeLink.set(target);
        } else if (target === scrollingTo) {
          // Reached the programmatic scroll target — update and unlock
          this.activeLink.set(target);
          this.scrollingToLink.set(null);
        }
        // Otherwise we are mid-scroll past an intermediate section — ignore
      },
      { threshold: 0.6 },
    );

    sections.forEach((section) => this.observer?.observe(section));

    this.destroyRef.onDestroy(() => {
      this.observer?.disconnect();
      this.observer = null;
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
