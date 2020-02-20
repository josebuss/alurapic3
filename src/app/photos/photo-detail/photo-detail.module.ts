import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoDetailComponent } from './photo-detail.component';
import { PhotoModule } from '../photo/photo.module';
import { PhotoComentsComponent } from './photo-coments/photo-coments.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from 'src/app/shared/components/vmessage/vmessage.module';

@NgModule({
  imports: [
    CommonModule,
    PhotoModule,
    VmessageModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    PhotoDetailComponent,
    PhotoComentsComponent
  ],
  exports: [
    PhotoDetailComponent,
    PhotoComentsComponent
  ]
})
export class PhotoDetailModule { }
