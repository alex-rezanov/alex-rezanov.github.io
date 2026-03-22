import { Component, computed, input } from '@angular/core';
import { TestimonialsData } from '../../shared/models';
import { HomeTestimonialsComponent } from '../../home/home-testimonials/home-testimonials.component';

@Component({
  selector: 'app-work-testimonials',
  imports: [HomeTestimonialsComponent],
  templateUrl: './work-testimonials.component.html',
  styleUrl: './work-testimonials.component.scss',
})
export class WorkTestimonialsComponent {
  testimonialsData = input.required<TestimonialsData>();

  title = computed(() => this.testimonialsData().title);
  testimonials = computed(() => this.testimonialsData().testimonials);
}
