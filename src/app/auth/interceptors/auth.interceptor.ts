import { inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { APP_CONST } from 'src/app/config/app-constantes.config';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  authService = inject(AuthService);
  constructor() {}
  x = { a: 0, b: 3 };
  y = { a: 0, b: 3 };
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.authService.isAuthenticated()) {
      const token = this.authService.getToken();
      //const params = new HttpParams().set(APP_CONST.accessToken, token);
      const headers = new HttpHeaders().set(APP_CONST.authorization, token);
      // const headersNew = { ...request.headers, ...headers };
      // const cloneRequest = request.clone({
      //   headers: headersNew as HttpHeaders,
      // });
      const cloneRequest = request.clone({headers});
      return next.handle(cloneRequest);
    }
    return next.handle(request);
  }
}

export const authInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}
