import { Component, Input } from '@angular/core';
import { NewMomentComponent } from '../pages/new-moment/new-moment.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {

  @Input()
  btnText!:string

}
