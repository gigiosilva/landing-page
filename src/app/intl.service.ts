import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class IntlService {

  private languages = [
    'en_US',
    'es',
    'pt_BR'
  ];

  public translated: any;

  constructor(
    private translate: TranslateService,
    private route: ActivatedRoute
  ) {
    translate.setDefaultLang(this.route.snapshot.queryParams.language || 'en_US');
  }

  getCurrentLanguage () {
    return this.translate.currentLang;
  }

  getIntl() {
    return this.translate;
  }

  getTranslationByKey(key) {
    this.translate.get([key]).subscribe(translation => {
      return translation[key];
    })
  }

  use(language) {
    this.translate.use(language);
  }

  setDefaultLanguage(language) {
    this.translate.setDefaultLang(language);
  }
}
