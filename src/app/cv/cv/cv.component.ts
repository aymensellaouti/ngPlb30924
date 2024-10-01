import { Component } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {

  today = new Date();
  // Je suis le smart component je suis le boss je réfléchi
  // Je dois tout d'abord fournir la liste des cvs
  /**
   * La liste des cvs à afficher
   */
  cvs: Cv[] = [
    new Cv(
      1,
      'sellaouti',
      'aymen',
      'teacher',
      '           ',
      '1234',
      42
    ),
    new Cv(
      2,
      'Lharras',
      'Yousra',
      'Dev',
      '',
      '12345',
      20
    ),
    new Cv(
      3,
      'Sainnier',
      'Sylvain',
      'Dev',
      'rotating_card_profile3.png',
      '123456',
      22
    ),
    new Cv(
      4,
      'Fouhety',
      'Kevin',
      'Dev',
      'rotating_card_profile2.png',
      '123456',
      22
    ),
    new Cv(
      5,
      'Medmad',
      'Safae',
      'Dev',
      'rotating_card_profile.png',
      '123456',
      22
    ),
  ];

  /**
   * Le cv sélectionné
   */
  selectedCv: Cv | null = null;

  onSelectCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
