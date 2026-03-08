import { Component, inject } from '@angular/core';
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

  private readonly linkService = inject(LinkService);

  protected onScrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
