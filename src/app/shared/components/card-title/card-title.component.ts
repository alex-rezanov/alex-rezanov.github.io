import { Component, input } from '@angular/core';
import { CardTitleData } from '../../models';

@Component({
  selector: 'app-card-title',
  imports: [],
  templateUrl: './card-title.component.html',
  styleUrl: './card-title.component.scss',
})
export class CardTitleComponent {
  isBigTitle = input(false);
  cardIndex = input(0);
  cardTitleData = input.required<CardTitleData>();
}
