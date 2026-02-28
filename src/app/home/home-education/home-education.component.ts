import { Component } from '@angular/core';
import { EDUCATION_ITEMS } from '../../shared/constants';

@Component({
  selector: 'app-home-education',
  imports: [],
  templateUrl: './home-education.component.html',
  styleUrl: './home-education.component.scss',
})
export class HomeEducationComponent {
  protected educationItems = EDUCATION_ITEMS;
}
