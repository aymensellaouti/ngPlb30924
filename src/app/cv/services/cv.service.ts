import { inject, Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { APP_API } from 'src/app/config/app-api.config';
import { AuthService } from 'src/app/auth/services/auth.service';
import { APP_CONST } from 'src/app/config/app-constantes.config';

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
   * Subject
   * Le flux des cvs sélectionnés Exemple Cv1, Cv3, Cv1, Cv4 ...
   */
  #selectedCvSubject$ = new Subject<Cv>();
  /**
   * Observable
   * Le flux des cvs sélectionnés Exemple Cv1, Cv3, Cv1, Cv4 ...
   */
  selectedCv$ = this.#selectedCvSubject$.asObservable();

  http = inject(HttpClient);
  authService = inject(AuthService);

  /**
   * Retourne l'observale de l'appel de l'api pour Récupérer la liste des cvs
   * @returns Observable<Cv[]>
   */
  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(APP_API.cv);
  }

  /**
   * Retourne l'observale de l'appel de l'api pour Récupérer le cv par son id
   * @returns Observable<Cv>
   */
  getCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(APP_API.cv + id);
  }
  /**
   * Supprime un cv par son id
   * @returns Observable<{count: number}>
   */
  deleteCvById(id: number): Observable<{ count: number }> {
    // CA c'est mal il faut pas faire ca !!!!!!!!!!!!!!!!
    const token = this.authService.getToken();
    //const params = new HttpParams().set(APP_CONST.accessToken, token);
    const headers = new HttpHeaders().set(APP_CONST.authorization, token);
    return this.http.delete<{ count: number }>(APP_API.cv + id, { headers });
  }

  /**
   * Retourne la liste des cvs
   * @returns Cv[]
   */
  getFakeCvs(): Cv[] {
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
    return this.#cvs.find((cv) => cv.id === +id) ?? null;
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteFakeCv(cv: Cv): boolean {
    const index = this.#cvs.indexOf(cv);
    if (index != -1) {
      this.#cvs.splice(index, 1);
      return true;
    }
    return false;
  }

  /**
   * Ajouter le cv dans le flux des cvs sélectionnés
   * @param cv : Cv à ajouter au flux des cvs sélectionnés
   */
  onSelectCv(cv: Cv): void {
    this.#selectedCvSubject$.next(cv);
  }
}
