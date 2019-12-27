import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundComponent } from './background.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ColorCompactModule } from 'ngx-color/compact';
import { UploaderComponent } from '../uploader/uploader.component';

describe('BackgroundComponent', () => {
  let component: BackgroundComponent;
  let fixture: ComponentFixture<BackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundComponent, UploaderComponent ],
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
    fixture = TestBed.createComponent(BackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the background color', () => {
    component.background = {
      backImage: false,
      imageUrl: '',
      color: ''
    }

    let color = {
      color : {
        hex: '#333'
      }
    }

    component.handleChange(color);
    expect(component.background.color).toEqual('#333');

  });

  it('should update the background image', () => {
    component.background = {
      backImage: false,
      imageUrl: '',
      color: ''
    }
    const image = 'testingUrl';
    component.updateImage(image);
    expect(component.background.imageUrl).toEqual(image);
  });

  it('should show image upload option', () => {
    component.background = {
      backImage: false,
      imageUrl: '',
      color: ''
    }

    component.updateSelect('image');
    expect(component.backgroundSet && component.background.backImage).toBeTruthy();

  });

  it('should show color selection option', () => {
    component.background = {
      backImage: false,
      imageUrl: '',
      color: ''
    }

    component.updateSelect('color');
    expect(component.background.backImage).toBeFalsy();
    
  });

});
