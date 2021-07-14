import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AngularmaterialModule } from 'src/app/ui/materials/angularmaterial.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AngularmaterialModule,
  ],
  declarations: [RegisterComponent,
    LoginComponent,
    ForgotpasswordComponent],
  exports: [
    LoginComponent
  ]
})
export class LandingModule { }
