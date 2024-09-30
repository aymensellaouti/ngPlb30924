import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css'],
})
export class MiniWordComponent {
  // L'état du composant
  color = '#ff0000';
  fontFamily = 'garamond';
  fontSize = 50;
}
