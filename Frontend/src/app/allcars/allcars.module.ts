import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllcarsPageRoutingModule } from './allcars-routing.module';

import { AllcarsPage } from './allcars.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllcarsPageRoutingModule
  ],
  declarations: [AllcarsPage]
})
export class AllcarsPageModule {}
