import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  headers: HttpHeaders;
  url: string = environment.apiUrl + '/business';
  
  constructor(
    private http: HttpClient,
  ) {
    this.headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', localStorage.getItem('auth_token'));
  }

  public getSettings(idBusiness): Observable<any> {
    return this.http.get(this.url + `/${idBusiness}/landing-setting`, { headers: this.headers });
  }
}
