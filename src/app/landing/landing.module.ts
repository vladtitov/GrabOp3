import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingAllianceComponent} from "./landing-alliance/landing-alliance.component";
import {LandingSummaryComponent} from "./landing-summary/landing-summary.component";
import {LandingHeaderComponent} from "./landing-header/landing-header.component";
import {LandingComponent} from "./landing.component";
import {MySharedModule} from '../shared/shared.module';
import {MaterialModuleApp} from '../shared/material-app.module';


@NgModule({
  imports: [
    CommonModule,
    MySharedModule,
    MaterialModuleApp
  ],
  declarations: [
    LandingComponent,
    LandingHeaderComponent,
    LandingSummaryComponent,
    LandingAllianceComponent,
  ]
})
export class LandingModule { }
