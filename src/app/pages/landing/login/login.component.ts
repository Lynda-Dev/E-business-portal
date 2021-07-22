import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { emailFormat } from 'src/app/validators/validators';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loginIn = false;
  private loginErr = false;

  loginFormGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
    private loginServ: LoginService,
    private router: Router, private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loginFormGroup = this.fb.group({
      username: ['', [Validators.required]],
      doorKey: ['', [Validators.required]],
      // remeberme: [''],
    });
  }

  startLoading() {

    this.loginIn = true;
  }

  stopLoading() {

    this.loginIn = false;
  }

  public validateLogin() {
    this.startLoading();

    this.loginServ.validate(this.loginFormGroup.value).pipe().subscribe(
      res => {
        console.log(res);
        if (res['code'] && res['code'] === '00') {
          const username = this.loginFormGroup.get(['username']).value;

          localStorage.setItem('user', `${username.split('.')[0]} ${username.split('.')[1]}`);
          localStorage.setItem('data', res['data'])

          this.router.navigate(['/admin/dashboard'], { relativeTo: this.route });

          this.stopLoading();
        } else {
          this.loginErr = true;
          this.stopLoading();
        }
      },
      () => {
        this.stopLoading();
        this.loginErr = true;
      }
    );
  }
}
