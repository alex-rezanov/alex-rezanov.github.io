import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ALEX_DETAILS } from '../../shared/constants';
import { LinkService } from '../../core/services';

@Component({
  selector: 'app-home-welcome',
  imports: [NgOptimizedImage, MatButton, MatIcon],
  templateUrl: './home-welcome.component.html',
  styleUrls: ['./home-welcome.component.scss'],
})
export class HomeWelcomeComponent {
  protected readonly alexDetails = ALEX_DETAILS;

  private readonly linkService = inject(LinkService);

  protected onEmailClick(): void {
    this.linkService.getEmailLink();
  }

  protected onLinkedInClick(): void {
    this.linkService.getLinkedInLink();
  }

  protected onCvClick(): void {
    this.linkService.getCvLink();
  }
}
