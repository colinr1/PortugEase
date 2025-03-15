import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';

@Component({
  selector: 'app-quizzes',
  imports: [RouterLink, TabsComponent],
  templateUrl: './quizzes.component.html',
  styleUrl: './quizzes.component.scss',
})
export default class QuizzesComponent {}
