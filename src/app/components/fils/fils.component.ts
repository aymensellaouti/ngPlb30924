import { Component, EventEmitter, Input, Output } from '@angular/core';

// filsComponent() {} => ! parmetrable
// filsComponent(name) {} => paramètrable
@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent {

  // Je veux que cet attribut soit visible de l'extérieur
  // Je veux que messageDePapa soit un parametere du composant
  @Input()
  messageDePapa = 'range ta chambre';
  // L'evenement à envoyer à mon père
  @Output()
  sendDataToDad = new EventEmitter<string>();

  triggerSendDataToDad() {
    this.sendDataToDad.emit('cc papa');
  }
}
