import { Component } from '@angular/core';

interface TestimonialItem {
  quote: string;
  author: string;
  position: string;
  pictureUrl: string;
}

const TESTIMONIAL_ITEMS: TestimonialItem[] = [
  {
    quote:
      'Having worked alongside him on several high-stakes projects, I’ve seen firsthand his ability to bridge the gap between complex technical requirements and intuitive user experiences. He doesn’t just complete a task; he thinks three steps ahead to ensure the foundation is solid for the entire team. His contribution was pivotal in our last launch, and his eye for architectural detail is unmatched.',
    author: 'Name Surname',
    position: 'UX Designer',
    pictureUrl: 'assets/images/welcome.jpg',
  },
  {
    quote:
      "He possesses a rare talent for minimalism that doesn't sacrifice personality. In a world of cluttered interfaces and noise, he consistently delivers designs that are clean, focused, and incredibly effective. He has an innate ability to take a vague brief and turn it into a visual identity that feels both modern and timeless. He’s truly redefined our creative standards.",
    author: 'Name Surname',
    position: 'UX Designer',
    pictureUrl: 'assets/images/welcome.jpg',
  },
  {
    quote:
      "When a project hits a wall, he’s the person you want in the room. He approaches every challenge with a calm, analytical mindset that instantly puts the team at ease. I’ve watched him take some of our most difficult technical debt and transform it into streamlined, efficient workflows. His dedication to 'doing it right the first time' has saved us countless hours and resources.",
    author: 'Name Surname',
    position: 'UX Designer',
    pictureUrl: 'assets/images/welcome.jpg',
  },
  {
    quote:
      'Beyond his technical prowess, he brings an infectious energy to the workplace. He is a natural mentor who is always willing to share his knowledge and elevate those around him. He understands that a successful product is built by a successful team, and he goes out of his way to foster an environment of collaboration and mutual respect. He is, quite simply, the heart of our department.',
    author: 'Name Surname',
    position: 'UX Designer',
    pictureUrl: 'assets/images/welcome.jpg',
  },
  {
    quote:
      'The level of precision he brings to his work is staggering. Every line, every pixel, and every line of code is intentional. He has a unique way of looking at a project from 30,000 feet to see the strategy, then diving deep into the weeds to execute the finer details. This duality makes him an indispensable asset to any forward-thinking organization.',
    author: 'Name Surname',
    position: 'UX Designer',
    pictureUrl: 'assets/images/welcome.jpg',
  },
  {
    quote:
      'In an industry that moves as fast as ours, he is a constant driver of innovation. He is never satisfied with the status quo and is always researching new methodologies to keep us ahead of the curve. What’s most impressive is his reliability; when he commits to a deadline or a vision, you can consider it done. He is the gold standard for what a modern professional should be.',
    author: 'Name Surname',
    position: 'UX Designer',
    pictureUrl: 'assets/images/welcome.jpg',
  },
];

@Component({
  selector: 'app-home-testimonials',
  imports: [],
  templateUrl: './home-testimonials.component.html',
  styleUrl: './home-testimonials.component.scss',
})
export class HomeTestimonialsComponent {
  protected testimonialItems = TESTIMONIAL_ITEMS;
}
