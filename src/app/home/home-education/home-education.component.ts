import { Component } from '@angular/core';
import { it } from 'vitest';

interface EducationItem {
  position: string;
  duration: string;
  grade?: string;
}

const EDUCATION_ITEMS: EducationItem[] = [
  {
    position: 'Google UX Design Certification',
    duration: 'August 2024 - March 2026',
  },
  {
    position: 'NUUPES',
    duration: 'Sep 2019 - March 2021',
    grade: 'Master Degree in Sport Sciences',
  },
  {
    position: 'NUUPES',
    duration: 'August 2015 - March 2019',
    grade: 'Bachelor Degree in Sport Sciences',
  },
];

@Component({
  selector: 'app-home-education',
  imports: [],
  templateUrl: './home-education.component.html',
  styleUrl: './home-education.component.scss',
})
export class HomeEducationComponent {
  protected educationItems = EDUCATION_ITEMS;
  protected readonly it = it;
}
