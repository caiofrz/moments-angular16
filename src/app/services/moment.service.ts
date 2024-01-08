import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Moment } from '../interfaces/Moments';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MomentService {
  private baseApiUrl: string = environment.baseApiURL;
  private apiUrl: string = `${this.baseApiUrl}api/moments`;

  constructor(private http: HttpClient) {}

  create(formData: FormData): Observable<FormData> {
    console.log(this.apiUrl);
    return this.http.post<FormData>(this.apiUrl, formData);
  }
}
