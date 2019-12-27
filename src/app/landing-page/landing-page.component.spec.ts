import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponent } from './landing-page.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageComponent ],
      imports: [
        FormsModule,
        MatButtonModule,
        MatRadioModule,
        MatInputModule,
        MatSelectModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not set backgroundImage on init', () => {
    expect(component.backgroundImage).toBe(null);
  });

  it('should set the settings object with saved values', () => {
    let settings = {
      inputFields: [
        {
          label: 'First Name',
          required: true,
          display: true,
          status: 'input',
          type: 'text',
          value:'',
          title: 'firstName',
  
        },
        {
          label: 'Last Name',
          required: true,
          display: true,
          status: 'input',
          type: 'text',
          value:'',
          title: 'lastName'
        },
        {
          label: 'Phone',
          required: true,
          display: true,
          status: 'input',
          type: 'number',
          value:'',
          title: 'phone'
        },
        {
          label: 'Birthdate',
          required: true,
          display: true,
          status: 'input',
          type: 'text',
          value:'',
          title: 'birthdate'
        },
        {
          label: 'Email',
          required: false,
          display: true,
          status: 'input',
          type: 'email',
          value:'',
          title: 'email'
        },
        {
          label: 'Country',
          required: false,
          display: true,
          status: 'input',
          type: 'text',
          value:'',
          title: 'country'
        },
        {
          label: 'ZIP Code',
          required: false,
          display: true,
          status: 'input',
          type: 'text',
          value:'',
          title: 'zip'
        },
        {
          label: 'State',
          required: false,
          display: true,
          status: 'input',
          type: 'text',
          value:'',
          title: 'state'
        },
        {
          label: 'City',
          required: false,
          display: true,
          status: 'input',
          type: 'text',
          value:'',
          title: 'city'
        },
        {
          label: 'Attendent Name',
          required: false,
          display: true,
          status: 'input',
          type: 'text',
          value:'',
          title: 'attendent'
        },
        {
          label: 'Gender',
          required: false,
          display: true,
          status: 'checkbox',
          type: 'text',
          value:'',
          title: 'gender'
        },
        {
          label: 'Address',
          required: false,
          display: true,
          status: 'textarea',
          type: 'text',
          value:'',
          title: 'address'
        }
      ],
      landingPageTitle: {
        title: '',
        font: '',
        color: '',
        fontSize: ''
      },
      landingDescription: {
        description: '',
        font: '',
        color: '',
        fontSize: ''
      },
      landingFooter: {
        description: '',
        font: '',
        color: '',
        fillColor: '#ccc',
        fontSize: ''
      },
      registerButton: {
        description: 'Create Account',
        font: '',
        color: '',
        fillColor: '',
        fontSize: ''
      },
      termOfService: {
        description: '',
        font: '',
        color: '',
        fontSize: ''
      },
      background:{
        backImage: false,
        color: '#f1f1f1',
        imageUrl: null
      },
      termsLink: '',
      businessLogo: '',
      pageIcon: ''
    }
    component.setSettingsValue(JSON.stringify(settings));
    expect(component.settings).toEqual(settings);
  });

  it('should only display the register form fields with display value true', () => {
    const fixture = TestBed.createComponent(LandingPageComponent);
    fixture.whenStable().then(() => {
      component.settings.inputFields.map(field => {
        field.display = false;
      });

      expect(fixture.debugElement.query(By.css('.registerField'))).toBeNull();
    });
  });

});
