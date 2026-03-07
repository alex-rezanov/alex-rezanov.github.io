import { Component, input } from '@angular/core';
import { ResearchData } from '../../shared/models';

@Component({
  selector: 'app-work-research',
  imports: [],
  templateUrl: './work-research.component.html',
  styleUrl: './work-research.component.scss',
})
export class WorkResearchComponent {
  researchData = input.required<ResearchData>();
}
