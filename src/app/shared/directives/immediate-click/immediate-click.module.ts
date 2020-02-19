import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImmediateClickDirective } from './immediate-click.directive';

@NgModule({
  imports: [CommonModule],
  exports: [ImmediateClickDirective],
  declarations: [ImmediateClickDirective]
})
export class ImmediateClickModule { }
