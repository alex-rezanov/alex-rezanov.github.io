import { Component, computed, input } from '@angular/core';
import { DesignData } from '../../shared/models';
import { CardTitleComponent } from '../../shared/components';

@Component({
  selector: 'app-work-design',
  imports: [CardTitleComponent],
  templateUrl: './work-design.component.html',
  styleUrl: './work-design.component.scss',
})
export class WorkDesignComponent {
  designData = input.required<DesignData>();

  title = computed(() => this.designData().title);
  titleImageUrl = computed(() => this.designData()?.titleImage);
  designDecisions = computed(() => this.designData().designDecisions);
  designFlowItems = computed(() => this.designData()?.designFlowItems);
  footerImage = computed(() => this.designData()?.footerImage);
  isGeostrategists = computed(() => this.designData()?.isGeostrategists);
}
