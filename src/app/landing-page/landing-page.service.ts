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
  zipCodeUrl: string = environment.zipCodeUrl;
  addressUrl: string = environment.addressUrl;
  addressKey: string = environment.addressKey;
  callback: string = window.location.origin;
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

  public saveContact(idBusiness, contact): Observable<any> {
    return this.http.post(this.contactUrl, { ...contact, idBusiness }, { headers: this.headers });
  }

  public getAddressByZipCode(zipCode): Observable<any> {
    return this.http.get(this.zipCodeUrl + `/${zipCode}/json`);
  }

  public getCountries(): Observable<any> {
    return this.http.jsonp(this.addressUrl + `/country/all/?key=${this.addressKey}`, 'callback');
  }

  public getRegions(country): Observable<any> {
    return this.http.jsonp(this.addressUrl + `/region/${country}/all/?key=${this.addressKey}`, 'callback');
  }

  public getCities(region, country): Observable<any> {
    return this.http.jsonp(this.addressUrl + `/city/${country}/search/?region=${region}&key=${this.addressKey}`, 'callback');
  }
}
