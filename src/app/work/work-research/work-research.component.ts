import { Component, input } from '@angular/core';

@Component({
  selector: 'app-work-research',
  imports: [],
  templateUrl: './work-research.component.html',
  styleUrl: './work-research.component.scss',
})
export class WorkResearchComponent {
  researchData = input.required();
}
