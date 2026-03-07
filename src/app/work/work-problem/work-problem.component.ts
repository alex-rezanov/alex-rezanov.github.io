import { Component, input } from '@angular/core';
import { ProblemData } from '../../shared/models';

@Component({
  selector: 'app-work-problem',
  imports: [],
  templateUrl: './work-problem.component.html',
  styleUrl: './work-problem.component.scss',
})
export class WorkProblemComponent {
  problemData = input.required<ProblemData>();
}
