import { Component } from '@angular/core';
import { PLAYGROUND_ITEMS } from '../../shared/constants';
import { WorkCardComponent } from '../../shared/components';

@Component({
  selector: 'app-home-playground',
  imports: [WorkCardComponent],
  templateUrl: './home-playground.component.html',
  styleUrl: './home-playground.component.scss',
})
export class HomePlaygroundComponent {
  playgroundItems = PLAYGROUND_ITEMS;
}
