import { Component, input } from '@angular/core';

@Component({
  selector: 'app-work-conclusion',
  imports: [],
  templateUrl: './work-conclusion.component.html',
  styleUrl: './work-conclusion.component.scss',
})
export class WorkConclusionComponent {
  conclusionData = input.required();
}
