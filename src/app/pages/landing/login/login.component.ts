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
      email: ['', [Validators.required, Validators.pattern(emailFormat)]],
      keypaswd: ['', [Validators.required]],
      // remeberme: [''],
    });
  }

  public loginUSer() {

    this.startLoading();
    this.clearLogiErrLoading();

    if (this.loginFormGroup.invalid) {
      console.log('err');
    } else {
      console.log(this.loginFormGroup.value);



      setTimeout(() => {
        // this.validateLogin();
        this.fakeLogin(this.loginFormGroup.get('email').value, this.loginFormGroup.get('keypaswd').value);
        // this.router.navigate(['/vendor/dashboard'], { relativeTo: this.route });
      }, 1000);
    }
  }

  fakeLogin(email, password) {

    this.startLoading();
    this.clearLogiErrLoading();

    console.log(password);
    if (password === 'password3' && email === 'vendor@zenithinsurance.com.ng') {
      this.router.navigate(['/vendor/dashboard'], { relativeTo: this.route });
    } else if (password === 'password1' && email === 'admin@zenithinsurance.com.ng') {
      this.router.navigate(['/admin/vendors'], { relativeTo: this.route });
    } else if (password === 'password2' && email === 'uw@zenithinsurance.com.ng') {
      this.router.navigate(['/uw/policies'], { relativeTo: this.route });

    } else {
      this.loginErr = true;
    }

    this.stopLoading();
  }

  startLoading() {

    this.loginIn = true;
  }

  stopLoading() {

    this.loginIn = false;
  }

  clearLogiErrLoading() {

    this.loginErr = false;
  }

  private validateLogin() {
    this.loginServ.validate(this.loginFormGroup.value).pipe().subscribe(res => {
      console.log(res);
      if (res['rescode'] && res['rescode'] === '00') {
        this.loginServ.setLoginUser(true, res['role']);

        this.routeLogin(res['role']);

      } else {
        this.loginErr = true;
      }
      this.loginIn = false;
    }, err => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification')
    );
  }

  private routeLogin(role: any) {
    console.log(role);

  }

  private resetLogin() {
    this.loginIn = false;
  }
}
