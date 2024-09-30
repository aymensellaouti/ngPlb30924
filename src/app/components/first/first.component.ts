import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  name = 'FirstComponent';

  message ='';
  // Attributs => State
  // Une variable qui gére la propriété hidden  de la balise p
  isHidden: boolean = true;
  // Méthodes => Beahivour (comportement)

  showHide() {
    this.isHidden = !this.isHidden;
  }

  changeMessage(newMessage: string) {
    this.message = newMessage;
  }
}
