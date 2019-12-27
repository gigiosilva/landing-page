import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SettingPageComponent } from './setting-page/setting-page.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { DynamicTextComponent } from './dynamic-text/dynamic-text.component';
import { ColorSketchModule } from 'ngx-color/sketch';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { TermServiceComponent } from './term-service/term-service.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { BackgroundComponent } from './background/background.component';
import { UploaderComponent } from './uploader/uploader.component';
import { ColorCompactModule } from 'ngx-color/compact';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SettingPageComponent,
    DynamicTextComponent,
    TermServiceComponent,
    FileUploaderComponent,
    BackgroundComponent,
    UploaderComponent        
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatCheckboxModule,
    MatButtonModule,
    ColorSketchModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    ColorCompactModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
