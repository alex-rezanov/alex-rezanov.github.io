import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ALEX_DETAILS } from '../../shared/constants';
import { LinkService } from '../../core/services';

@Component({
  selector: 'app-home-contact',
  imports: [MatButton, MatIcon],
  templateUrl: './home-contact.component.html',
  styleUrl: './home-contact.component.scss',
})
export class HomeContactComponent {
  protected readonly links = ALEX_DETAILS.links;

  private readonly linkService = inject(LinkService);

  protected onLinkedInClick(): void {
    this.linkService.getLinkedInLink();
  }

  protected onEmailClick(): void {
    this.linkService.getEmailLink();
  }
}
