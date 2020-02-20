import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoComment } from '../../photo/photo-comment';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../../photo/photo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'ap-photo-coments',
  templateUrl: './photo-coments.component.html',
  styleUrls: ['./photo-coments.component.css']
})
export class PhotoComentsComponent implements OnInit {

  @Input() photoId: number;

  comments$: Observable<PhotoComment[]>;

  commentForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.comments$ = this.photoService.getComments(this.photoId);
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.maxLength(300)]
    });
  }

  save() {
    this.comments$ = this.photoService
      .addComments(this.photoId, this.commentForm.get('comment').value)
      .pipe(switchMap(() => this.photoService.getComments(this.photoId)))
      .pipe(tap(() => {
        this.commentForm.reset();
        alert("Comentário adicionado com sucesso!");
      }));
  }

}
