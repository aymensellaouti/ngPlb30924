import { inject, Injectable } from '@angular/core';
import { Credentials } from '../dto/credentials.dto';
import { Observable, tap } from 'rxjs';
import { LoginResonse } from '../dto/login-response.dto';
import { HttpClient } from '@angular/common/http';
import { APP_API } from 'src/app/config/app-api.config';
import { APP_CONST } from 'src/app/config/app-constantes.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient);
  constructor() { }

  login(credentials: Credentials): Observable<LoginResonse> {
    return this.http.post<LoginResonse>(APP_API.login, credentials)
    .pipe(
      tap( response => {
        localStorage.setItem(APP_CONST.token, response.id);
      })
    );
  }

  getToken(): string {
    return localStorage.getItem(APP_CONST.token) ?? '';
  }

  logout() {
    localStorage.removeItem(APP_CONST.token);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
