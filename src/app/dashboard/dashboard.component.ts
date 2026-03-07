import { Component } from '@angular/core';
import { FooterComponent, SideBarComponent } from '../shared/components';
import { RouterOutlet } from '@angular/router';
import { NavigationSection } from '../shared/enums';

@Component({
  selector: 'app-dashboard',
  imports: [SideBarComponent, RouterOutlet, FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  protected readonly homeSection = NavigationSection;
}
