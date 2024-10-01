import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'input[appRainbow][type=text]',
})
export class RainbowDirective {
  // Quelles propriétés je gére
  // Quelles propriétés je gére
  @HostBinding('style.color') color = 'black';
  @HostBinding('style.borderColor') borderColor = 'black';
  @HostBinding('style.border') border = 'solid 3px';
  constructor() {
    console.log('Rainbow');
  }
  // Quelle comportement
  @HostListener('keyup') onKeyUp() {
    this.color = this.getRandomColor();
    this.borderColor = this.getRandomColor();
  }

  private getRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
