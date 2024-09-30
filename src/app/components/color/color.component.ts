import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent {
  /**
   * La couleur  par défaut
   * du background
   */
  defaultColor = 'red';

  /**
   * @param la variable qui gére
   * le backgroundColor
   *
   */
  bgc = this.defaultColor;

  /**
   * Cette méthode permet de modifier
   * la couleur du background de la div
   * @param colorInput: HtmlInputElement
   */
  changeColor(colorInput: HTMLInputElement) {
    this.bgc = colorInput.value;
    colorInput.value = '';
  }

  /**
   * Remet à jour la couleur de la div avec
   * la couleur par défaut
   */
  reset() {
    this.bgc = this.defaultColor;
  }
}
