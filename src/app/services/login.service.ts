import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, interval } from 'rxjs';
import { baseUrl } from '../base/base-url';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = baseUrl + '/DoorEntrance';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }


  public validate(loginUser) {
    const httpOptions = this.httpClientHeaders();
    // const loginUser = {
    //   'email': username,
    //   'keypaswd': password
    // };
    const loginUserData = JSON.stringify(loginUser);
    console.log(loginUser);
    return this.http.post(this.loginUrl, loginUserData, httpOptions);
  }// validateLogin


  setLoginUser(
    value: boolean,
    role: string,
  ) {
    console.log(' this is login ');

  }

  ////////////////////////////////
  // headers for HTTPCLIENT calls
  private httpClientHeaders() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Zenith-ApiAuthentication': 'ZenithVendorInsurance:Z3n17Hv3ND05'
      })
    };
  }
}

// $id: "1"
// branch: "Head Office"
// branchCode: "ZI001"
// email: "clinton.adeyemi@zenithinsurance.com.ng"
// organisation: "Zenith Insurance"
// organisationId: 1
// resToken: "6174eb1252bc424e13408fd43cf9d38ef870b93cdd30ea68feb7b99033b2ebf44dcd301ae3c79e318adb0afccb5f92156538d579551945feb5150150180caac0"
// responseCode: "00"
// role: "Admin"
// roleID: 2
// sessID: 84253832
