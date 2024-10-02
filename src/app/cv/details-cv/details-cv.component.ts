import { Component, inject } from "@angular/core";
import { Cv } from "../model/cv.model";
import { ActivatedRoute, Router } from "@angular/router";
import { CvService } from "../services/cv.service";
import { APP_ROUTES } from "src/app/config/app-routes.config";
import { AuthService } from "src/app/auth/services/auth.service";

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent {
  acr = inject(ActivatedRoute);
  cvService = inject(CvService);
  router = inject(Router);
  authService = inject(AuthService);
  // Je récupére le paramètre
  id = this.acr.snapshot.params['id'];
  cv: Cv | null = null;

  constructor() {
    this.cvService.getCvById(this.id).subscribe({
      next: (cv) => {
        this.cv = cv;
      },
      error: (e) => {
        this.router.navigate([APP_ROUTES.cv]);
      },
    });
    // if (!this.cv) {// }
  }
  delete() {
    if (this.cv) {
      this.cvService.deleteCvById(this.cv.id).subscribe({
        next: () => {
          this.router.navigate([APP_ROUTES.cv]);
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
  // 1- Définir la route ok
  // 2- Définir les méthodes dans le service CvService : ok
  // 2-1 getCvById
  // 2-2 deleteCv
  // 3- Dans la carte le bouton details qui redirige vers la
  // page détailsCvComponent ok
  // 4- Dans détails : ok
  // 4-1 récupérer le id et le chercher dans la liste
  // 4-1-1 Ok afficher le cv
  // 4-1-2 ko rediriger vers la liste des cvs
  // 4-2 si click sur siupprimer on supprime puis on
  // redirige vers la liste
}
