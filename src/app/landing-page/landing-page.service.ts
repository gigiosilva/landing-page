import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  headers: HttpHeaders;
  url: string = environment.apiUrl + '/business';
  contactUrl: string = environment.apiUrl + '/contact';
  token: string;
  
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.token = this.route.snapshot.queryParams.token;
    this.headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', this.token);
  }

  public getSettings(idBusiness): Observable<any> {
    return this.http.get(this.url + `/${idBusiness}/landing-setting`, { headers: this.headers });
  }

  public saveContact(contact): Observable<any> {
    return this.http.post(this.contactUrl, { ...contact }, { headers: this.headers });
  }
}
