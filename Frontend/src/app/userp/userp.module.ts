import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserpPageRoutingModule } from './userp-routing.module';

import { UserpPage } from './userp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UserpPageRoutingModule,
    
  ],
  declarations: [UserpPage],
  exports: [UserpPage]
})
export class UserpPageModule {}
