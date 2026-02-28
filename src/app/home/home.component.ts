import { Component } from '@angular/core';
import { FooterComponent, SideBarComponent } from '../shared/components';
import { HomeWelcomeComponent } from './home-welcome/home-welcome.component';
import { HomeSelectedWorkComponent } from './home-selected-work/home-selected-work.component';
import { HomePlaygroundComponent } from './home-playground/home-playground.component';
import { HomeExperienceComponent } from './home-experience/home-experience.component';
import { HomeTestimonialsComponent } from './home-testimonials/home-testimonials.component';
import { HomeEducationComponent } from './home-education/home-education.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HomeContactComponent } from './home-contact/home-contact.component';
import { HomeSection } from '../shared/enums';

@Component({
  selector: 'app-home',
  imports: [
    SideBarComponent,
    HomeWelcomeComponent,
    HomeSelectedWorkComponent,
    HomePlaygroundComponent,
    HomeExperienceComponent,
    HomeTestimonialsComponent,
    HomeEducationComponent,
    HomeAboutComponent,
    HomeContactComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected readonly homeSection = HomeSection;
}
