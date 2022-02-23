import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { UppassPageRoutingModule } from './uppass-routing.module';

import { UppassPage } from './uppass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UppassPageRoutingModule,
   ReactiveFormsModule
  ],
  declarations: [UppassPage]
})
export class UppassPageModule {}
