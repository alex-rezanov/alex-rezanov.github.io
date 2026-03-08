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
    const ox = event.clientX + window.scrollX;
    const oy = event.clientY + window.scrollY;

    const newParticles: EmojiParticle[] = Array.from({ length: 23 }, (_, i) => {
      // spread evenly around 360° with jitter so no two overlap
      const angle = (i / 28) * Math.PI * 2 + random(-0.3, 0.3);
      const speed = random(200, 560);
      const tx = Math.cos(angle) * speed;
      const ty = Math.sin(angle) * speed;
      const endY = ty + random(260, 620);
      const duration = random(1800, 3000);
      const delay = random(0, 120);
      const size = random(1.9, 3.4);
      return {
        id: this.nextId++,
        emoji: EMOJIS[Math.floor(random(0, EMOJIS.length))],
        ox,
        oy,
        size,
        cssVars: [
          `--dur:${duration}ms`,
          `--delay:${delay}ms`,
          `--t0:translate3d(-50%,-50%,0) scale(0)`,
          `--t1:translate3d(-50%,-50%,0) scale(1.4)`,
          `--t2:translate3d(calc(${tx.toFixed(2)}px - 50%),calc(${endY.toFixed(2)}px - 50%),0) scale(0.4)`,
          `font-size:${size}rem`,
        ].join(';'),
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
