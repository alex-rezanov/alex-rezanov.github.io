import { Component, computed, input } from '@angular/core';
import { ProcessData } from '../../shared/models';

@Component({
  selector: 'app-work-process',
  imports: [],
  templateUrl: './work-process.component.html',
  styleUrl: './work-process.component.scss',
})
export class WorkProcessComponent {
  processData = input.required<ProcessData>();

  title = computed(() => this.processData().title);
  processTableData = computed(() => this.processData().processTableData);
  imageSection = computed(() => this.processData().imageSection);
}
