import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent {
  two = 'init value';

  updateTwo() {
    this.two = 'ceci est une nouvelle valeur';
  }
}
