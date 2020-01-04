import { LandingPageService } from './landing-page.service';
import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { getToken } from '@angular/router/src/utils/preactivation';
import { IntlService } from '../intl.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public translate: any;
  private idBusiness: number;
  public backgroundImage = null;
  public settings: any = {};
  public designFields: Object = {};
  public loading = true;
  public completed = false;

  constructor(
    @Inject(DOCUMENT) public _document: HTMLDocument, 
    public sanitizer: DomSanitizer,
    private landingPageService: LandingPageService,
    private route: ActivatedRoute,
    private intlService: IntlService,
  ) {
    this.idBusiness = this.route.snapshot.params.id;
    this.translate = this.intlService.getIntl();
  }

  ngOnInit() {
    this.landingPageService.getSettings(this.idBusiness).subscribe(settings => {
      this.settings = settings.landingSettings;
      this.generateDesignField();
      this.setPageIcon();
      this.loading = false;
    });
  }

  setSettingsValue(settings) {
    this.settings = JSON.parse(settings);
    if(this.settings.background.imageUrl){
      this.backgroundImage = this.sanitizer.bypassSecurityTrustStyle(`url(${this.settings.background.imageUrl}) no-repeat`);
    }
  }

  setPageIcon() {
    this._document.getElementById('appFavicon').setAttribute('href', this.designFields["icon"].link);
  }

  generateDesignField() {
    this.designFields = this.settings.designFields.reduce((fields, setting) => {
      fields[setting.field.name.toLowerCase()] = setting;
      return fields;
    }, {});
  }

  saveContact(form) {
    console.log(form);
    this.completed = true;
    this.restart();
  }

  restart() {
    setTimeout(_=> {
      this.completed = false;
      location.reload();
    }, 5000);
  }
}
