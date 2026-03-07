import { Component, input } from '@angular/core';

@Component({
  selector: 'app-work-intro',
  imports: [],
  templateUrl: './work-intro.component.html',
  styleUrl: './work-intro.component.scss',
})
export class WorkIntroComponent {
  introData = input.required();
}
