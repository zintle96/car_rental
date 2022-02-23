import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardUPageRoutingModule } from './dashboard-u-routing.module';

import { DashboardUPage } from './dashboard-u.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardUPageRoutingModule
  ],
  declarations: [DashboardUPage]
})
export class DashboardUPageModule {}
