import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  backgroundImage = null;
  constructor(@Inject(DOCUMENT) public _document: HTMLDocument, public sanitizer: DomSanitizer) { 
  }
  
  settings = {
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

  ngOnInit() {
    let initialState = window.localStorage.getItem('settings');
    if(initialState){
      this.setSettingsValue(initialState);
      this.setPageIcon();
    } 
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

}
