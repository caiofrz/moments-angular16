import { Component, OnInit } from '@angular/core';
import { delay, timeout } from 'rxjs';
import { Moment } from 'src/app/interfaces/Moments';
import { MomentService } from 'src/app/services/moment.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  moments: Moment[] = [];
  momentsSearch: Moment[] = [];
  loading: boolean = true;

  private readonly baseApiUrl = environment.baseApiURL;

  constructor(private momentService: MomentService) {}

  ngOnInit(): void {
    this.momentService.getAll().subscribe((moments) => {
      const data = moments.data;
      data.map((moment) => {
        moment.created_at = new Date(moment.created_at!).toLocaleDateString(
          'pt-BR'
        );
      });

      this.moments = data;
      this.momentsSearch = data;
      this.loading = false;
    });
  }

  search(event: Event): void {
    const target = event.target as HTMLInputElement;
    const searchValue = target.value;

    this.moments = this.momentsSearch.filter((moment) => {
      return moment.title.toLowerCase().includes(searchValue.toLowerCase());
    });
  }
}
