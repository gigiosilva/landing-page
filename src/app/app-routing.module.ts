import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SettingPageComponent } from './setting-page/setting-page.component';

const routes: Routes = [
    { path: '', component: SettingPageComponent},
    { path: 'landing', component: LandingPageComponent},
    { path: 'settings', component: SettingPageComponent}
];

@NgModule({    
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
