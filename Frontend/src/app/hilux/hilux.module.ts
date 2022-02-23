import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HiluxPageRoutingModule } from './hilux-routing.module';

import { HiluxPage } from './hilux.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HiluxPageRoutingModule
  ],
  declarations: [HiluxPage]
})
export class HiluxPageModule {}
