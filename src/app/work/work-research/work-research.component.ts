import { Component, computed, input } from '@angular/core';
import { ResearchData } from '../../shared/models';
import { CardTitleComponent } from '../../shared/components';

@Component({
  selector: 'app-work-research',
  imports: [CardTitleComponent],
  templateUrl: './work-research.component.html',
  styleUrl: './work-research.component.scss',
})
export class WorkResearchComponent {
  researchData = input.required<ResearchData>();

  title = computed(() => this.researchData().title);
  researchImageWithDescription = computed(() => this.researchData().researchImageWithDescription);
  qualitativeInsights = computed(() => this.researchData().qualitativeInsights);
  conclusion = computed(() => this.researchData().conclusion);
  conclusionImageWithDescription = computed(() => this.researchData().conclusionImageWithDescription);
}
