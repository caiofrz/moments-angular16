import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { catchError } from 'rxjs';
import { Comment } from 'src/app/interfaces/Comment';
import { Moment } from 'src/app/interfaces/Moments';
import { Response } from 'src/app/interfaces/Response';
import { CommentService } from 'src/app/services/comment.service';
import { MomentService } from 'src/app/services/moment.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css'],
})
export class MomentComponent implements OnInit {
  private readonly baseApiUrl: string = environment.baseApiURL;
  readonly imageApiUrl: string = `${this.baseApiUrl}uploads`;
  moment!: Moment;

  commentForm!: FormGroup;

  comment: Comment = {
    text: 'Comentário teste',
    username: 'CaioFerraz',
    momentId: '2',
  };

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute,
    private commentService: CommentService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.momentService.getOne(id).subscribe((data) => {
      this.moment = data.data;
      this.moment.comments!.push(this.comment);
      this.moment.comments!.push(this.comment);
      this.moment.comments!.push(this.comment);
    });

    this.commentForm = new FormGroup({
      text: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
    });
  }

  get text() {
    return this.commentForm.get('text')!;
  }

  get username() {
    return this.commentForm.get('username')!;
  }

  async onSubmit(formDirective: FormGroupDirective) {
    if (this.commentForm.invalid) return;

    const data: Comment = this.commentForm.value;
    data.momentId = String(this.moment.id);

    this.commentService
      .create(data)
      .pipe(
        catchError(async () =>
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Não foi adicionar seu comentário!',
          })
        )
      )
      .subscribe((comment) => {
        this.moment.comments!.push(comment!.data);
        this.messageService.add({
          severity: 'success',
          summary: 'Successo',
          detail: 'Comentário adicionado com sucesso!',
        });
      });

    this.commentForm.reset();
    formDirective.resetForm();
  }
}
