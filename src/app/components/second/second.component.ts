import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  template: `
    <div class="alert alert-danger">
      <p>Cc je suis le second Component</p>
    </div>
  `,
  styles: [``],
})
export class SecondComponent {
  activatedRoute = inject(ActivatedRoute);
}
