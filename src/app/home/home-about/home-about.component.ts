import { Component, inject } from '@angular/core';
import {
  BOOK_ITEMS,
  INTERESTING_ITEMS,
  LANGUAGE_ITEMS,
  PRINCIPLE_ITEMS,
} from '../../shared/constants';
import { MatButton } from '@angular/material/button';
import { LinkService } from '../../core/services';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-home-about',
  imports: [MatButton, MatIcon],
  templateUrl: './home-about.component.html',
  styleUrl: './home-about.component.scss',
})
export class HomeAboutComponent {
  protected principleItems = PRINCIPLE_ITEMS;
  protected interestingItems = INTERESTING_ITEMS;
  protected languageItems = LANGUAGE_ITEMS;
  protected bookItems = BOOK_ITEMS;

  private readonly linkService = inject(LinkService);

  protected onCvClick(): void {
    this.linkService.getCvLink();
  }
}
