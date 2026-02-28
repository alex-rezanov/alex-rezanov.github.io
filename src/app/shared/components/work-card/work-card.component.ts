import { Component, input } from '@angular/core';
import { WorkItem } from '../../models';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrl: './work-card.component.scss',
  imports: [MatButton],
})
export class WorkCardComponent {
  workItem = input<WorkItem>();
}
