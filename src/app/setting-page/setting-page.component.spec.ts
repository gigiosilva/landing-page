import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingPageComponent } from './setting-page.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DynamicTextComponent } from '../dynamic-text/dynamic-text.component';
import { TermServiceComponent } from '../term-service/term-service.component';
import { FileUploaderComponent } from '../file-uploader/file-uploader.component';
import { BackgroundComponent } from '../background/background.component';
import { UploaderComponent } from '../uploader/uploader.component';
import { ColorCompactModule } from 'ngx-color/compact';

describe('SettingPageComponent', () => {
  let component: SettingPageComponent;
  let fixture: ComponentFixture<SettingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        SettingPageComponent,
        DynamicTextComponent,
        TermServiceComponent,
        FileUploaderComponent,
        BackgroundComponent,
        UploaderComponent         
      ],
      imports: [
        FormsModule,
        MatButtonModule,
        MatRadioModule,
        MatInputModule,
        MatSelectModule,
        BrowserAnimationsModule,
        MatCheckboxModule,
        ColorCompactModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the landing title', () => {
    const title = {
      title: 'test',
      font: '700',
      color: '#333',
      fontSize: '24px'
    }
    component.updateLandingTitle(title);
    expect(component.settings.landingPageTitle).toEqual(title);
  });

  it('should update the landing description', () => {
    const description = {
      description: 'test',
      font: '700',
      color: '#333',
      fontSize: '24px'
    }
    component.updateLandingDescription(description);
    expect(component.settings.landingDescription).toEqual(description);
  });

  it('should update the landing footer', () => {
    const description = {
      description: 'test',
      font: '700',
      color: '#333',
      fontSize: '24px',
      fillColor: '#333'
    }
    component.updateLandingFooter(description);
    expect(component.settings.landingFooter).toEqual(description);
  });

  it('should update the register button', () => {
    const description = {
      description: 'test',
      font: '700',
      color: '#333',
      fontSize: '24px',
      fillColor: '#333'
    }
    component.updateRegisterButton(description);
    expect(component.settings.registerButton).toEqual(description);
  });

  it('should update the update terms', () => {
    const description = {
      description: 'test',
      font: '700',
      color: '#333',
      fontSize: '24px'
    }
    component.updateTerms(description);
    expect(component.settings.termOfService).toEqual(description);
  });

  it('should update the background', () => {
    const description = {
      backImage: null,
      color: '#333',
      imageUrl: ''
    }
    component.updateBack(description);
    expect(component.settings.background).toEqual(description);
  });

  it('should update the terms link', () => {
    const description = '';
    component.updateLink(description);
    expect(component.settings.termsLink).toEqual(description);
  });

  it('should update the business logo', () => {
    const description = '';
    component.updateBusinessLogo(description);
    expect(component.settings.businessLogo).toEqual(description);
  });

  it('should update the page icon', () => {
    const description = '';
    component.updatePageIcon(description);
    expect(component.settings.pageIcon).toEqual(description);
  });

});
