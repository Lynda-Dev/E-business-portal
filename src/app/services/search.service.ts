import { Injectable } from '@angular/core';
import { baseUrl } from '../base/base-url';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {
  searchUrl = baseUrl + 'api/DateSearch';
  searchByIdUrl = baseUrl + 'api/IdSearch';

  constructor(private http: HttpClient) { }

  retrieveSearch(searchDate, bearer: string){
    const httpOptions = this.httpClientHeaders(bearer);

    return this.http.post(this.searchUrl, searchDate, httpOptions);
  }

  retrieveSearchById(payload, bearer: string) {
    const httpOptions =this.httpClientHeaders(bearer);

    return this.http.post(this.searchByIdUrl, payload, httpOptions);
  }


  // headers for HTTPCLIENT calls
  private httpClientHeaders(bearer: string) {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + bearer
      })
    };
  }
}
