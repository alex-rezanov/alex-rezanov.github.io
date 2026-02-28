import { Component, input } from '@angular/core';
import { WorkItem } from '../../models';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrl: './work-card.component.scss',
  imports: [],
})
export class WorkCardComponent {
  workItem = input<WorkItem>();
}
