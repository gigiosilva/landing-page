import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-setting-page',
  templateUrl: './setting-page.component.html',
  styleUrls: ['./setting-page.component.scss']
})
export class SettingPageComponent implements OnInit {

  constructor() { 
    let initialState = window.localStorage.getItem('settings');
    if(initialState){
      this.settings = JSON.parse(initialState);
    }
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
      fillColor: '',
      fontSize: ''
    },
    registerButton: {
      description: '',
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
      color: '',
      imageUrl: null
    },
    termsLink: '',
    businessLogo: '',
    pageIcon: ''
  }
  


  saveSettings(){
    console.log(this.settings);
    window.localStorage.setItem('settings', JSON.stringify(this.settings));
  }

  updateLandingTitle(event){
    console.log(event);
    this.settings.landingPageTitle = event;
  }

  updateLandingDescription(event){
    // console.log(event);
    this.settings.landingDescription = event;
  }

  updateLandingFooter(event){
    // console.log(event);
    this.settings.landingFooter = event;
  }

  updateRegisterButton(event){
    // console.log(event);
    this.settings.registerButton = event;
  }

  updateTerms(event){
    // console.log(event);
    this.settings.termOfService = event;
  }

  updateLink(event){
    this.settings.termsLink = event;
    // console.log(this.settings.termsLink);
  }

  updateBusinessLogo(event){
    this.settings.businessLogo = event;
    // console.log(event);
  }

  updatePageIcon(event){
    // this._document.getElementById('appFavicon').setAttribute('href', event);
    this.settings.pageIcon = event;
  }

  updateBack(event){
    // console.log(event);
    this.settings.background = event;
  }

  ngOnInit() {
    
  }

} 
