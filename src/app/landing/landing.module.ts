import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingAllianceComponent} from "./landing-alliance/landing-alliance.component";
import {LandingSummaryComponent} from "./landing-summary/landing-summary.component";
import {LandingHeaderComponent} from "./landing-header/landing-header.component";
import {LandingComponent} from "./landing.component";


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LandingComponent,
    LandingHeaderComponent,
    LandingSummaryComponent,
    LandingAllianceComponent,
  ]
})
export class LandingModule { }
