import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-home-welcome',
  imports: [NgOptimizedImage, MatButton, MatIcon],
  templateUrl: './home-welcome.component.html',
  styleUrls: ['./home-welcome.component.scss'],
})
export class HomeWelcomeComponent {}
