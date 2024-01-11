import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comment } from '../interfaces/Comment';
import { Observable } from 'rxjs';
import { Response } from '../interfaces/Response';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private readonly baseApiUrl: string = environment.baseApiURL;
  private readonly commentsApiUrl: string = `${this.baseApiUrl}api/moments`;


  constructor(private http: HttpClient) {}

  create(comment: Comment): Observable<Response<Comment>> {
    const uri = `${this.commentsApiUrl}/${comment.momentId}/comments`
    return this.http.post<Response<Comment>>(uri, comment);
  }
}
