import { Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  #cvs = [
    new Cv(1, 'sellaouti', 'aymen', 'teacher', '           ', '1234', 42),
    new Cv(2, 'Lharras', 'Yousra', 'Dev', '', '12345', 20),
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
   * Retourne la liste des cvs
   * @returns Cv[]
   */
  getCvs(): Cv[] {
    return this.#cvs;
  }

  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findCvById(id: number): Cv | null {
    return this.#cvs.find( cv => cv.id == id) ?? null;
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): boolean {
    const index = this.#cvs.indexOf(cv);
    if (index != -1) {
      this.#cvs.splice(index, 1);
      return true;
    }
    return false;
  }
}
