import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHelloService } from 'src/app/services/say-hello.service';
import { TodoService } from 'src/app/todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  today = new Date();
  cvService = inject(CvService);
  // Je suis le smart component je suis le boss je réfléchi
  // Je dois tout d'abord fournir la liste des cvs
  /**
   * La liste des cvs à afficher
   */
  cvs: Cv[] = [];

  /**
   * Le cv sélectionné
   */
  selectedCv$: Observable<Cv> = this.cvService.selectedCv$;
  /**
   * Le flux des cvs renvoyés par l'api
   */
  cvs$: Observable<Cv[]> = this.cvService.getCvs();

  loggerService = inject(LoggerService);
  helloService = inject(SayHelloService);
  todoService = inject(TodoService);
  toastr = inject(ToastrService);
  constructor() {
    this.helloService.hello();
    this.loggerService.logger('cc je suis le cvComponent');
    this.toastr.info('Hello CvComponent');
    // V1
    // this.cvService.selectedCv$.subscribe({
    //   next: (cv) => this.selectedCv = cv
    // });
    this.cvService.getCvs().subscribe({
      next: (cvs) => {
        this.cvs = cvs;
      },
      error: (e) => {
        this.toastr.error('Veuillez contacter l admin la liste des cvs est fake, quelque chose c est mal passé')
        this.cvs = this.cvService.getFakeCvs();
      }
    })
  }
  // onSelectCv(cv: Cv) {
  //   this.selectedCv = cv;
  //   this.todoService.logTodos();
  // }

}
