import { Component, input } from '@angular/core';

@Component({
  selector: 'app-work-design',
  imports: [],
  templateUrl: './work-design.component.html',
  styleUrl: './work-design.component.scss',
})
export class WorkDesignComponent {
  designData = input.required();
}
