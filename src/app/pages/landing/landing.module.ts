import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AngularmaterialModule } from 'src/app/ui/materials/angularmaterial.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AngularmaterialModule,
  ],
  declarations: [ LoginComponent ],
  exports: [ LoginComponent ]
})
export class LandingModule { }
