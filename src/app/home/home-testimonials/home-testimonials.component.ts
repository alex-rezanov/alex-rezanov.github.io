import { Component, inject } from '@angular/core';
import { TESTIMONIAL_ITEMS } from '../../shared/constants';
import { LinkService } from '../../core/services';

@Component({
  selector: 'app-home-testimonials',
  imports: [],
  templateUrl: './home-testimonials.component.html',
  styleUrl: './home-testimonials.component.scss',
})
export class HomeTestimonialsComponent {
  protected testimonialItems = TESTIMONIAL_ITEMS;
  private readonly linkService = inject(LinkService);

  protected onLinkClick(link: string): void {
    if (!link) {
      return;
    }
    this.linkService.openLink(link);
  }
}
