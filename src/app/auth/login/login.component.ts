import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Credentials } from '../dto/credentials.dto';
import { APP_CONST } from 'src/app/config/app-constantes.config';
import { APP_ROUTES } from 'src/app/config/app-routes.config';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authService = inject(AuthService);
  toastr = inject(ToastrService);
  router = inject(Router);
  constructor() {}

  login(credentials: Credentials) {
    this.authService.login(credentials).subscribe({
      next: () => {
        this.toastr.success(`Bienvenu dans votre espace`);
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: (error) => {
        this.toastr.error(`Veuillez vérifier vos credentials`);
      }
    })
  }
}
