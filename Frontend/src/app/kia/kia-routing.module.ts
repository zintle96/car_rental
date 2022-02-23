import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KiaPage } from './kia.page';

const routes: Routes = [
  {
    path: '',
    component: KiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KiaPageRoutingModule {}
