import { Component } from '@angular/core';
import { WORK_ITEMS } from '../../shared/constants';
import { WorkCardComponent } from '../../shared/components';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-selected-work',
  imports: [WorkCardComponent, RouterLink],
  templateUrl: './home-selected-work.component.html',
  styleUrl: './home-selected-work.component.scss',
})
export class HomeSelectedWorkComponent {
  protected readonly workItems = WORK_ITEMS;
}
