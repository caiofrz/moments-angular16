import { Component } from '@angular/core';
import { FormComponent } from '../../form/form.component';
import { Moment } from 'src/app/interfaces/Moments';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css'],
})
export class NewMomentComponent {
  constructor(private momentService: MomentService) {}

  async createHandler(moment: Moment) {
    console.log('boa');

    const formData = new FormData();
    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }

    this.momentService.create(formData).subscribe();
  }

  btnText: string = 'Compartilhar!';
}
