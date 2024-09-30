import { Component } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  // Je suis le smart component je suis le boss je réfléchi
  // Je dois tout d'abord fournir la liste des cvs

  cvs: Cv[] = [
    new Cv(
      1,
      'sellaouti',
      'aymen',
      'teacher',
      'rotating_card_profile2.png',
      '1234',
      42
    ),
    new Cv(
      2,
      'Lharras',
      'Yousra',
      'Dev',
      'rotating_card_profile.png',
      '12345',
      20
    ),
    new Cv(
      2,
      'Sainnier',
      'Sylvain',
      'Dev',
      'rotating_card_profile3.png',
      '123456',
      22
    ),
  ];
}
