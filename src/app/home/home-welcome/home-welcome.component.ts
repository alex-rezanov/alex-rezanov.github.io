import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ALEX_DETAILS, EMOJIS } from '../../shared/constants';
import { HapticService, LinkService } from '../../core/services';
import { EmojiParticle } from '../../shared/models';
import { random } from '../../shared/utils';

@Component({
  selector: 'app-home-welcome',
  imports: [NgOptimizedImage, MatButton, MatIcon],
  templateUrl: './home-welcome.component.html',
  styleUrls: ['./home-welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeWelcomeComponent {
  protected nextId = 0;
  protected readonly alexDetails = ALEX_DETAILS;

  private readonly linkService = inject(LinkService);
  private readonly hapticService = inject(HapticService);

  protected readonly particles = signal<EmojiParticle[]>([]);
  protected readonly imgPunching = signal(false);

  protected onImgClick(event: MouseEvent): void {
    this.imgPunching.set(true);
    const ox = event.clientX;
    const oy = event.clientY;

    const newParticles: EmojiParticle[] = Array.from({ length: 50 }, (_, i) => {
      // spread evenly around 360° with jitter so no two overlap
      const angle = (i / 28) * Math.PI * 2 + random(-0.3, 0.3);
      const speed = random(200, 560);
      const ty = Math.sin(angle) * speed;
      return {
        id: this.nextId++,
        emoji: EMOJIS[Math.floor(random(0, EMOJIS.length))],
        ox,
        oy,
        tx: Math.cos(angle) * speed,
        ty,
        endY: ty + random(260, 620),
        spin: random(-600, 600),
        duration: random(1600, 2400),
        delay: random(0, 120),
        size: random(1.5, 3),
      };
    });
    this.particles.update(prev => [...prev, ...newParticles]);
  }

  protected onImgAnimationEnd(): void {
    this.imgPunching.set(false);
  }

  protected removeParticle(id: number): void {
    this.particles.update(prev => prev.filter(p => p.id !== id));
  }

  protected onEmailClick(): void {
    this.hapticService.triggerSuccess().then(() => {
      this.linkService.getEmailLink();
    });
  }

  protected onLinkedInClick(): void {
    this.linkService.getLinkedInLink();
  }

  protected onCvClick(): void {
    this.linkService.getCvLink();
  }
}
