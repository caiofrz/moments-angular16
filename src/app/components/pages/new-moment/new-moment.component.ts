import { Component } from '@angular/core';
import { Moment } from 'src/app/interfaces/Moments';
import { MomentService } from 'src/app/services/moment.service';
import { MessageService } from 'primeng/api';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css'],
})
export class NewMomentComponent {
  constructor(
    private momentService: MomentService,
    private messageService: MessageService,
    private router: Router
  ) {}

  async createHandler(moment: Moment) {
    console.log('boa');

    const formData = new FormData();
    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }

    this.momentService
      .create(formData)
      .pipe(
        catchError(async () => {
          this.showMessageError();
        })
      )
      .subscribe((data) => {
        if (data) {
          this.showMessageSucces();
          this.router.navigate(['/']);
        }
      });
  }

  private showMessageSucces() {
    return this.messageService.add({
      severity: 'success',
      summary: 'Successo',
      detail: 'Momento compartilhado com sucesso!',
    });
  }
  private showMessageError() {
    return this.messageService.add({
      severity: 'error',
      summary: 'Erro',
      detail: 'Não foi possivel compartilhar o seu momento!',
    });
  }

  btnText: string = 'Compartilhar!';
}
