import { Component, Input } from '@angular/core';
import { Moment } from 'src/app/interfaces/Moments';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card-moment',
  templateUrl: './card-moment.component.html',
  styleUrls: ['./card-moment.component.css']
})
export class CardMomentComponent {

  private readonly baseApiUrl: string = environment.baseApiURL;
  readonly imageApiUrl: string = `${this.baseApiUrl}uploads`;


  @Input()
  moment!: Moment;

}
