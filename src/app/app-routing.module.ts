import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
    { path: ':id', component: LandingPageComponent}
];

@NgModule({    
    imports: [RouterModule.forRoot(routes, {useHash: false})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
