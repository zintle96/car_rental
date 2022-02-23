import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistationPageRoutingModule } from './registation-routing.module';

import { RegistationPage } from './registation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistationPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistationPage]
})
export class RegistationPageModule {}
