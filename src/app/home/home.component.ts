import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { HomeWelcomeComponent } from './home-welcome/home-welcome.component';
import { HomeSelectedWorkComponent } from './home-selected-work/home-selected-work.component';
import { HomePlaygroundComponent } from './home-playground/home-playground.component';
import { HomeExperienceComponent } from './home-experience/home-experience.component';
import { HomeTestimonialsComponent } from './home-testimonials/home-testimonials.component';
import { HomeEducationComponent } from './home-education/home-education.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HomeContactComponent } from './home-contact/home-contact.component';
import { NavigationSection } from '../shared/enums';
import { ActiveSessionStore } from '../core/services';
import { HOME_SIDE_BAR_ITEMS } from '../shared/constants';

@Component({
  selector: 'app-home',
  imports: [
    HomeWelcomeComponent,
    HomeSelectedWorkComponent,
    HomePlaygroundComponent,
    HomeExperienceComponent,
    HomeTestimonialsComponent,
    HomeEducationComponent,
    HomeAboutComponent,
    HomeContactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  protected readonly navigationSection = NavigationSection;
  private readonly activeSessionStore = inject(ActiveSessionStore);

  ngOnInit(): void {
    this.activeSessionStore.setSideBarItems(HOME_SIDE_BAR_ITEMS);
  }

  ngOnDestroy(): void {
    this.activeSessionStore.resetSideBarItems();
  }
}
