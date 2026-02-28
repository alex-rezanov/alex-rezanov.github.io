import { Component } from '@angular/core';
import { EXPERIENCE_ITEMS } from '../../shared/constants';

@Component({
  selector: 'app-home-experience',
  imports: [],
  templateUrl: './home-experience.component.html',
  styleUrl: './home-experience.component.scss',
})
export class HomeExperienceComponent {
  protected experienceItems = EXPERIENCE_ITEMS;
}
