import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

interface NavigationItem {
  label: string;
  link: string; // will be the id of the target section
}

const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: 'Home', link: 'welcome' },
  { label: 'Selected Work', link: 'selected-work' },
  { label: 'Playground', link: 'playground' },
  { label: 'Experience', link: 'experience' },
  { label: 'Testimonials', link: 'testimonials' },
  { label: 'Education', link: 'education' },
  { label: 'About', link: 'about' },
  { label: 'Contact', link: 'contact' },
];

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarComponent implements OnInit, OnDestroy {
  protected readonly navigationItems: NavigationItem[] = NAVIGATION_ITEMS;

  // currently active section id
  protected readonly activeLink = signal<string | null>(NAVIGATION_ITEMS[0].link);

  // flag to indicate we initiated a programmatic smooth scroll, used to suppress observer updates
  private readonly isAutoScrolling = signal(false);

  private readonly document = inject(DOCUMENT);
  private observer: IntersectionObserver | null = null;

  ngOnInit(): void {
    // Observe sections and update activeLink when they enter the viewport
    const sections = NAVIGATION_ITEMS.map((i) => this.document.getElementById(i.link)).filter(
      Boolean,
    ) as HTMLElement[];

    if (!sections.length) return;

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px 0px -40% 0px',
      threshold: [0.25, 0.5, 0.75],
    };

    this.observer = new IntersectionObserver((entries) => {
      // while we're auto-scrolling, ignore observer updates to avoid flicker
      if (this.isAutoScrolling()) return;

      // pick the entry with the largest intersectionRatio that's intersecting
      const visible = entries.filter((e) => e.isIntersecting);
      if (visible.length === 0) return;
      visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      const top = visible[0];
      this.activeLink.set((top.target as HTMLElement).id);
    }, options);

    sections.forEach((s) => this.observer?.observe(s));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.observer = null;
  }

  protected scrollTo(link: string): void {
    const el = this.document.getElementById(link);
    if (!el) return;

    // Immediately set active so UI reflects the user's intent and prevent observer overwriting
    this.activeLink.set(link);
    this.isAutoScrolling.set(true);

    const win = this.document.defaultView ?? (window as unknown as Window);
    const currentY = win.scrollY || this.document.documentElement.scrollTop || 0;
    const targetY = el.getBoundingClientRect().top + currentY;
    const distance = Math.abs(targetY - currentY);
    // heuristic duration: 0.5ms per px clamped between 300ms and 1000ms
    const duration = Math.max(300, Math.min(1000, Math.round(distance * 0.5)));

    // Perform smooth scroll and set focus for accessibility after the scroll finishes
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // fallback: clear auto-scrolling after estimated duration + small buffer
    setTimeout(() => {
      try {
        el.setAttribute('tabindex', '-1');
        el.focus({ preventScroll: true });
      } catch {
        // ignore focus errors in older browsers
      }
      this.isAutoScrolling.set(false);
      // ensure active is set at the end as well
      this.activeLink.set(link);
    }, duration + 50);
  }
}
