import { Component, computed, input } from '@angular/core';
import { ProblemData } from '../../shared/models';
import { CardTitleComponent } from '../../shared/components';

@Component({
  selector: 'app-work-problem',
  imports: [CardTitleComponent],
  templateUrl: './work-problem.component.html',
  styleUrl: './work-problem.component.scss',
})
export class WorkProblemComponent {
  problemData = input.required<ProblemData>();

  title = computed(() => this.problemData().title);
  problemTableData = computed(() => this.problemData().problemTableData);
  tableDescription = computed(() => this.problemData()?.tableDescription);
  footerImageUrl = computed(() => this.problemData()?.footerImageUrl);
}
