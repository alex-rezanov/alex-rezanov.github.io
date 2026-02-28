import { Injectable } from '@angular/core';
import { ALEX_DETAILS, EMAIL_DEFAULT_BODY, EMAIL_DEFAULT_SUBJECT } from '../../shared/constants';

@Injectable({
  providedIn: 'root',
})
export class LinkService {
  protected readonly links = ALEX_DETAILS.links;

  getEmailLink(emailBody = EMAIL_DEFAULT_BODY): void {
    const subject = encodeURIComponent(EMAIL_DEFAULT_SUBJECT);
    const body = encodeURIComponent(emailBody.trim());
    const href = `mailto:${this.links.email}?subject=${subject}&body=${body}`;

    window.open(href, '_self');
  }

  getLinkedInLink(): void {
    window.open(this.links.linkedIn, '_blank');
  }

  getCvLink(): void {
    window.open(this.links.cv, '_blank', 'noopener,noreferrer');
  }
}
