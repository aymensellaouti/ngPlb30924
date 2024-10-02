import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { APP_ROUTES } from 'src/app/config/app-routes.config';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  router = inject(Router);
  authService = inject(AuthService);
  logout() {
    this.authService.logout();
    this.router.navigate([APP_ROUTES.login]);
  }
}
