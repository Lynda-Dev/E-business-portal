import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbeTowordPipe } from './../numbe2word/numbe2word.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NumbeTowordPipe]
})
export class PipeModule { }
