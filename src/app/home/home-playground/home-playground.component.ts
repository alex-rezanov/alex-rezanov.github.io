import { Component, inject } from '@angular/core';
import { PLAYGROUND_ITEMS } from '../../shared/constants';
import { WorkCardComponent } from '../../shared/components';
import { PlaygroundItem } from '../../shared/models';
import { LinkService } from '../../core/services';

@Component({
  selector: 'app-home-playground',
  imports: [WorkCardComponent],
  templateUrl: './home-playground.component.html',
  styleUrl: './home-playground.component.scss',
})
export class HomePlaygroundComponent {
  playgroundItems = PLAYGROUND_ITEMS;

  private readonly linkService = inject(LinkService);

  protected onLinkCLick(item: PlaygroundItem): void {
    if (!item?.link) {
      return;
    }
    this.linkService.openLink(item.link);
  }
}
