import { Component } from '@angular/core';
import { WotdComponent } from './wotd/wotd.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [WotdComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent {}
