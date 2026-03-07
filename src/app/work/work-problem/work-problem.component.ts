import { Component, input } from '@angular/core';

@Component({
  selector: 'app-work-problem',
  imports: [],
  templateUrl: './work-problem.component.html',
  styleUrl: './work-problem.component.scss',
})
export class WorkProblemComponent {
  problemData = input.required();
}
