import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Moment } from '../interfaces/Moments';
import { environment } from 'src/environments/environment';
import { Response } from '../interfaces/Response';

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

  getAll(): Observable<Response<Moment[]>> {
    return this.http.get<Response<Moment[]>>(this.apiUrl);
  }

  getOne(id: number): Observable<Response<Moment>> {
    const momentUrl = `${this.apiUrl}/${id}`;
    return this.http.get<Response<Moment>>(momentUrl);
  }
}
