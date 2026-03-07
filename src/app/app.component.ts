import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActiveSessionStore } from './core/services';
import { FooterComponent, SideBarComponent } from './shared/components';
import { NavigationSection } from './shared/enums';
import { MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MOBILE_WIDTH_THRESHOLD } from './shared/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  host: {
    '(window:resize)': 'userAgentCheck()',
  },
  imports: [RouterOutlet, FooterComponent, SideBarComponent, MatSidenavContent, MatSidenavContainer],
})
export class AppComponent implements OnInit {
  protected readonly homeSection = NavigationSection;

  private readonly activeSessionStore = inject(ActiveSessionStore);
  protected readonly isMobile = inject(ActiveSessionStore).isMobile;

  ngOnInit(): void {
    this.userAgentCheck();
  }

  userAgentCheck(): void {
    const ua = navigator.userAgent;

    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const isPhoneUA = /iPhone|iPod|Android.*Mobile/i.test(ua);

    const isMobile = isPhoneUA || (isTouch && screen.width <= MOBILE_WIDTH_THRESHOLD);
    this.activeSessionStore.setIsMobile(isMobile);
  }
}
