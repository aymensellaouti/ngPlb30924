import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css'],
})
export class NgStyleComponent {
  bgc = 'yellow';
  style = {
    color: 'red',
    backgroundColor: 'yellow',
    fontFamily: 'garamond',
    fontSize: '75px',
  };
}
