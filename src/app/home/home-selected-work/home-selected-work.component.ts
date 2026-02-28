import { Component } from '@angular/core';
import { SELECTED_WORK_ITEMS } from '../../shared/constants';
import { WorkCardComponent } from '../../shared/components';

@Component({
  selector: 'app-home-selected-work',
  imports: [WorkCardComponent],
  templateUrl: './home-selected-work.component.html',
  styleUrl: './home-selected-work.component.scss',
})
export class HomeSelectedWorkComponent {
  workItems = SELECTED_WORK_ITEMS;
}
