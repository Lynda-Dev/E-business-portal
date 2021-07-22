import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, interval } from 'rxjs';
import { baseUrl } from '../base/base-url';
import { Login } from './login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = baseUrl + 'api/auth';

  constructor(
    private http: HttpClient
  ) { }

  public validate(loginUser: Login) {
    const httpOptions = this.httpClientHeaders();

    return this.http.post(this.loginUrl, loginUser, httpOptions);
  }

  // headers for HTTPCLIENT calls
  private httpClientHeaders() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
}
