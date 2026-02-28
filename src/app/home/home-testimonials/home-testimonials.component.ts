import { Component } from '@angular/core';
import { TESTIMONIAL_ITEMS } from '../../shared/constants';

@Component({
  selector: 'app-home-testimonials',
  imports: [],
  templateUrl: './home-testimonials.component.html',
  styleUrl: './home-testimonials.component.scss',
})
export class HomeTestimonialsComponent {
  protected testimonialItems = TESTIMONIAL_ITEMS;
}
