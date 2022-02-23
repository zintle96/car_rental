import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KiaPageRoutingModule } from './kia-routing.module';

import { KiaPage } from './kia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KiaPageRoutingModule
  ],
  declarations: [KiaPage]
})
export class KiaPageModule {}
