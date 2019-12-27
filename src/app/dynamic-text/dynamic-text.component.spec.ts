import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTextComponent } from './dynamic-text.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ColorCompactModule } from 'ngx-color/compact';

describe('DynamicTextComponent', () => {
  let component: DynamicTextComponent;
  let fixture: ComponentFixture<DynamicTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicTextComponent ],
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
    fixture = TestBed.createComponent(DynamicTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should update the color', () => {
    component.content = {
      description: '',
      font: '',
      fontSize: '',
      title: '',
      fillColor: '',
      color: ''
    }

    const color = {
      color: {
        hex: '#333'
      }
    }
    component.handleChange(color);
    expect(component.content.color).toEqual("#333");
  }); 

  it('should update the title', () => {
    component.content = {
      description: '',
      font: '',
      fontSize: '',
      title: '',
      fillColor: ''
    }
    
    const title = 'testing';
    component.updateTitle(title);
    expect(component.content.title).toEqual(title);
  });

  it('should update the description', () => {
    component.content = {
      description: '',
      font: '',
      fontSize: '',
      title: '',
      fillColor: ''
    }
    
    const description = 'testing';
    component.updateDescription(description);
    expect(component.content.description).toEqual(description);

  });

  it('should update the font', () => {
    component.content = {
      description: '',
      font: '',
      fontSize: '',
      title: '',
      fillColor: ''
    }
    
    const font = '500';
    component.updateSelect(font);
    expect(component.content.font).toEqual(font);
  });

  it('should update the fontsize', () => {
    component.content = {
      description: '',
      font: '',
      fontSize: '',
      title: '',
      fillColor: ''
    }
    
    const fontSize = '24px';
    component.updateFontSize(fontSize);
    expect(component.content.fontSize).toEqual(fontSize);
  });

  it('should update the fillcolor', () => {
    component.content = {
      description: '',
      font: '',
      fontSize: '',
      title: '',
      fillColor: '',
      color: ''
    }

    const color = {
      color: {
        hex: '#333'
      }
    }
    component.handleBackgroundColor(color);
    expect(component.content.fillColor).toEqual("#333");
  });

});
