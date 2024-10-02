import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { APP_ROUTES } from 'src/app/config/app-routes.config';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  router = inject(Router);
  authService = inject(AuthService);
  translateService = inject(TranslateService);
  constructor() {
    this.translateService.setDefaultLang('fr');
    this.translateService.addLangs(['en', 'fr']);
    const browserLang = this.translateService.getBrowserLang() ?? 'fr';
    this.translateService.use(browserLang.match(/en|fr/) ? browserLang : 'fr');
  }

  logout() {
    this.authService.logout();
    this.router.navigate([APP_ROUTES.login]);
  }

  translate(langage: string): void {
    this.translateService.use(langage);
  }
}
