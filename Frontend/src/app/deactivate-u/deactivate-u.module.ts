import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeactivateUPageRoutingModule } from './deactivate-u-routing.module';

import { DeactivateUPage } from './deactivate-u.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DeactivateUPageRoutingModule
  ],
  declarations: [DeactivateUPage]
})
export class DeactivateUPageModule {}
