import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HiluxPage } from './hilux.page';

const routes: Routes = [
  {
    path: '',
    component: HiluxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HiluxPageRoutingModule {}
