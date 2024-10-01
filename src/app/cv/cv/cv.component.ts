import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHelloService } from 'src/app/services/say-hello.service';
import { TodoService } from 'src/app/todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';

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
  cvs: Cv[] = this.cvService.getCvs();

  /**
   * Le cv sélectionné
   */
  selectedCv: Cv | null = null;
  loggerService = inject(LoggerService);
  helloService = inject(SayHelloService);
  todoService = inject(TodoService);
  toastr = inject(ToastrService);
  constructor() {
    this.helloService.hello();
    this.loggerService.logger('cc je suis le cvComponent');
    this.toastr.info('Hello CvComponent');
  }
  onSelectCv(cv: Cv) {
    this.selectedCv = cv;
    this.todoService.logTodos();
  }
}
