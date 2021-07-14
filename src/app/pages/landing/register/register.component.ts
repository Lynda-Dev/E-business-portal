import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loginFormGroup: FormGroup;
  constructor(private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.loginFormGroup = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confpassword: ['', [Validators.required]],
      businessname: ['', [Validators.required]],
      lineOfBusiness: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    });
  }
}
