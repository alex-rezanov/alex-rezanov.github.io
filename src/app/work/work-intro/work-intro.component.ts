import { Component, computed, input } from '@angular/core';
import { IntroData } from '../../shared/models';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-work-intro',
  imports: [MatButton],
  templateUrl: './work-intro.component.html',
  styleUrl: './work-intro.component.scss',
})
export class WorkIntroComponent {
  introData = input.required<IntroData>();

  title = computed(() => this.introData().title);
  description = computed(() => this.introData().description);
  imageSection = computed(() => this.introData()?.imageSection);
  introTableData = computed(() => this.introData().introTableData);
}
