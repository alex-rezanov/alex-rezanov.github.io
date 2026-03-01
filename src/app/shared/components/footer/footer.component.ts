import { Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ALEX_DETAILS } from '../../constants';
import { LinkService } from '../../../core/services';

@Component({
  selector: 'app-footer',
  imports: [MatButton, MatIcon],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  protected readonly alexDetails = ALEX_DETAILS;
  protected readonly links = this.alexDetails.links;

  private readonly document = inject(DOCUMENT);
  private readonly linkService = inject(LinkService);

  protected onScrollToTop(): void {
    const container = this.document.querySelector<HTMLElement>('.section-container');
    if (container) {
      container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      this.document
        .getElementById('welcome')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  protected onEmailClick(): void {
    this.linkService.getEmailLink();
  }

  protected onCvClick(): void {
    this.linkService.getCvLink();
  }

  protected onLinkedInClick(): void {
    this.linkService.getLinkedInLink();
  }
}
