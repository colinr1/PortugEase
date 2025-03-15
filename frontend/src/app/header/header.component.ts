import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  myFunction() {
    let x = document.getElementById('myLinks');
    if (x && x.style.display === 'block') {
      x.style.display = 'none';
    } else {
      if (x) {
        x.style.display = 'block';
      }
    }
  }
}
