import { LandingPageService } from './landing-page.service';
import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  private idBusiness: number;
  backgroundImage = null;
  backgroundColor: Object = {};
  pageTitle: Object = {};
  pageDescription: Object = {};
  pageButton: Object = {};
  termsService: Object = {};
  public settings: any = {};

  constructor(
    @Inject(DOCUMENT) public _document: HTMLDocument, 
    public sanitizer: DomSanitizer,
    private landingPageService: LandingPageService,
    private route: ActivatedRoute
  ) {
    this.idBusiness = this.route.snapshot.params.id;
  }

  ngOnInit() {
    this.landingPageService.getSettings(this.idBusiness).subscribe(settings => {
      this.settings = settings.landingSettings;
      this.getGeneralFields();
    });
  }

  onSubmit(){
    console.log(this.settings.inputFields);
  }

  setSettingsValue(settings){
    this.settings = JSON.parse(settings);
    if(this.settings.background.imageUrl){
      this.backgroundImage = this.sanitizer.bypassSecurityTrustStyle(`url(${this.settings.background.imageUrl}) no-repeat`);
    }
  }

  setPageIcon(){
    this._document.getElementById('appFavicon').setAttribute('href', this.settings.pageIcon);
  }

  getGeneralFields() {
    this.backgroundColor = this.settings.designFields.find( setting => setting.field.name === 'BACKGROUND');
    this.pageTitle = this.settings.designFields.find( setting => setting.field.name === 'TITLE');
    this.pageDescription = this.settings.designFields.find( setting => setting.field.name === 'DESCRIPTION');
    this.pageButton = this.settings.designFields.find( setting => setting.field.name === 'BUTTON');
    this.termsService = this.settings.designFields.find( setting => setting.field.name === 'BUTTON');
  }

}
