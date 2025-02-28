import { Component } from '@angular/core';
import { WotdComponent } from '../wotd/wotd.component';

@Component({
  selector: 'app-home',
  imports: [WotdComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent {}
