import { LandingPageService } from './landing-page.service';
import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { getToken } from '@angular/router/src/utils/preactivation';
import { IntlService } from '../intl.service';
import { lightSpeedIn, zoomInDown, fadeOut, bounce } from 'ng-animate';
import { trigger, transition, useAnimation } from '@angular/animations';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [
    trigger('lightSpeedIn', [transition('* => *', useAnimation(lightSpeedIn))]),
    trigger('zoomInDown', [transition('* => *', useAnimation(zoomInDown))]),
    trigger('bounce', [transition('* => *', useAnimation(bounce, {
      params: { timing: 1}
    }))]),
    trigger('fadeOut', [transition('* => *', useAnimation(fadeOut))]),
  ],
})
export class LandingPageComponent implements OnInit {

  public translate: any;
  private idBusiness: number;
  public backgroundImage = null;
  public settings: any = {};
  public designFields: Object = new Object();
  public loading = true;
  public completed = false;
  public acceptedTerms: boolean = false;

  // Animations
  public shakeForm = false;

  public country;

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
    this._document.getElementById('appFavicon').setAttribute('href', this.designFields["icon"]["link"]);
  }

  generateDesignField() {
    this.designFields = this.settings.designFields.reduce((fields, setting) => {
      fields[setting.field.name.toLowerCase()] = setting;
      return fields;
    }, {});
  }

  saveContact(form) {
    if(form.valid && this.acceptedTerms) {
      form.value.type = "CLIENT";
      form.value.status = "ACTIVE";
      form.value.emails = [form.value.emails];
      form.value.phones = [form.value.phones];
      this.landingPageService.saveContact(this.idBusiness, form.value).subscribe(res => {
        console.log('Saved!');
      });
      form.reset();
      this.acceptedTerms = false;
      this.completed = true;
      this.restart();
    } else {
      this.shakeForm = !this.shakeForm;
    }
  }

  restart() {
    setTimeout(_=> {
      this.completed = false;
    }, 5000);
  }

  handleZipCode(zipCode) {
    this.landingPageService.getAddressByZipCode(zipCode).subscribe(address => {
      this.settings.inputFields.forEach(setting => {
        if(setting.field.name === 'COUNTRY') {
          setting.field.options = [{name: 'Brazil'}];
          setting.text = 'Brazil';
        }
        if(setting.field.name === 'STATE') {
          setting.field.options = [{name: address.uf}];
          setting.text = address.uf;
        }
        if(setting.field.name === 'CITY') {
          setting.field.options = [{name: address.localidade}];
          setting.text = address.localidade;
        }
        if(setting.field.name === 'ADDRESS') setting.text = `${address.logradouro}, ${address.bairro}`;
      })
    });
  }

  loadAPI(setting, component) {
    if(setting.field.name == 'COUNTRY') {
      this.landingPageService.getCountries().subscribe(countries => {
        this.settings.inputFields.find(setting => setting.field.name === 'COUNTRY').field.options = countries;
        setTimeout(_=> component.open(), 100);
      });
    }
    if(setting.field.name == 'STATE') {
      this.country = this.settings.inputFields.find(setting => setting.field.name === 'COUNTRY').text.code;

      this.landingPageService.getRegions(this.country).subscribe(regions => {
        this.settings.inputFields.find(setting => setting.field.name === 'STATE').field.options = regions;
        setTimeout(_=> component.open(), 100);
      });
    }
    if(setting.field.name == 'CITY') {
      let region = this.settings.inputFields.find(setting => setting.field.name === 'STATE').text.region;

      this.landingPageService.getCities(region, this.country).subscribe(cities => {
        this.settings.inputFields.find(setting => setting.field.name === 'CITY').field.options = cities;
        setTimeout(_=> component.open(), 100);
      });
    }
  }
}
