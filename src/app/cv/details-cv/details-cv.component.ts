import { Component } from "@angular/core";
import { Cv } from "../model/cv.model";

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent {
  cv: Cv | null = null;

  constructor() {}

  // 1- Définir la route
  // 2- Définir les méthodes dans le service CvService :
    // 2-1 getCvById
    // 2-2 deleteCv
  // 3- Dans la carte le bouton details qui redirige vers la
  // page détailsCvComponent
  // 4- Dans détails :
    // 4-1 récupérer le id et le chercher dans la liste
      // 4-1-1 Ok afficher le cv
      // 4-1-2 ko rediriger vers la liste des cvs
    // 4-2 si click sur siupprimer on supprime puis on
    // redirige vers la liste
}
