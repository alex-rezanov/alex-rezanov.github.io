import { Injectable, OnDestroy, signal } from '@angular/core';
import { defaultPatterns, WebHaptics } from 'web-haptics';

@Injectable({
  providedIn: 'root',
})
export class HapticService implements OnDestroy {
  private readonly haptics = new WebHaptics();
  readonly isSupported = signal(WebHaptics.isSupported ?? false);

  constructor() {
    // Enable haptic debugging in development mode
    this.haptics.setDebug(true);
  }

  triggerSuccess(): Promise<void> {
    if (!this.isSupported()) {
      return Promise.resolve();
    }
    return this.haptics.trigger(defaultPatterns.success);
  }

  ngOnDestroy(): void {
    this.haptics.destroy();
  }
}
