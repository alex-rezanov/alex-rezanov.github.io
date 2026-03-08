import { Component, computed, input } from '@angular/core';
import { ConclusionData } from '../../shared/models';

@Component({
  selector: 'app-work-conclusion',
  imports: [],
  templateUrl: './work-conclusion.component.html',
  styleUrl: './work-conclusion.component.scss',
})
export class WorkConclusionComponent {
  conclusionData = input.required<ConclusionData>();

  title = computed(() => this.conclusionData().title);
  conclusionTableData = computed(() => this.conclusionData().conclusionTableData);
}
