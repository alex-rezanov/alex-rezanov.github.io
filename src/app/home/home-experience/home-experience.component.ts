import { Component } from '@angular/core';

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  workLoad?: string;
  description: string;
}

const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    company: 'PlentyONE',
    position: 'UX Designer',
    duration: 'August 2024 - March 2026',
    workLoad: 'Full-time',
    description:
      'One of the biggest all-in-one e-commerce ERP and multichannel platform for retailers and brands in Germany.',
  },
  {
    company: 'Geostrategists',
    position: 'UX Designer',
    duration: 'April 2024 - July 2024',
    workLoad: 'Full-time',
    description: 'The on-demand platform for geopolitical consultants and country experts.',
  },
  {
    company: 'Hubinit',
    position: 'UI/UX Designer',
    duration: 'October 2023 - March 2024',
    workLoad: 'Full-time',
    description:
      'B2B startup from Amsterdam that offers on-demand TaaS to businesses looking for flexible support.',
  },
  {
    company: 'Self-employed',
    position: 'Fitness/Performance Coach',
    duration: 'June 2018 - February 2022',
    description:
      'Established and operated an independent coaching business for high-level athletes and general fitness clients.',
  },
  {
    company: 'Ukrainian Athletics Federation',
    position: 'Professional Athlete',
    duration: 'September 2014 - February 2022',
    description:
      'Multiple National Champion, represented Ukraine in high-level international competitions, including the European Championships and World University Games.',
  },
];

@Component({
  selector: 'app-home-experience',
  imports: [],
  templateUrl: './home-experience.component.html',
  styleUrl: './home-experience.component.scss',
})
export class HomeExperienceComponent {
  protected experienceItems = EXPERIENCE_ITEMS;
}
