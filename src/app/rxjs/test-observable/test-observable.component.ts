import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css'],
})
export class TestObservableComponent {
  // toutes var dont le nom se termine par $ est par convention un flux
  observable$: Observable<number>;
  toastr = inject(ToastrService);
  constructor() {
    // 5 4 3 2 1
    this.observable$ = new Observable((observer) => {
      let i = 5;
      const intervalIndex = setInterval(() => {
        if (!i) {
          observer.complete();
          clearInterval(intervalIndex);
        }
        observer.next(i--);
      }, 1000);
    });
    setTimeout(() => {
          this.observable$.subscribe({
            next: (valueFromObservable) => {
              console.log(valueFromObservable);
            },
          });
    },3000);
    this.observable$
    // 5 4 3 2 1
    .pipe(
      map( valeur => valeur * 3),
      // 15 12 9 6 3
      filter( valeur  => valeur % 2 == 0)
      // 12 6
    )
    .subscribe({
      next: (val) => {
        this.toastr.info('' + val);
      },
      complete: () => {
        this.toastr.success('fin du compte à rebours');
      },
      error: (e) => {
        this.toastr.error(e);
      }
    });
  }
}

// [u1, u2]

// u1, u2, u3
