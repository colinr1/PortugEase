import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WotdComponent } from '../wotd/wotd.component';

@Component({
  selector: 'app-quizzes',
  imports: [RouterLink, WotdComponent],
  templateUrl: './quizzes.component.html',
  styleUrl: './quizzes.component.css',
})
export default class QuizzesComponent {}
