import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-home-welcome',
  imports: [NgOptimizedImage, MatButton],
  templateUrl: './home-welcome.component.html',
  styleUrls: ['./home-welcome.component.scss'],
})
export class HomeWelcomeComponent {}
