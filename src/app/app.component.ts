import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSidenavContainer, MatSidenavContent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
