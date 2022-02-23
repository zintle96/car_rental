import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorollaPage } from './corolla.page';

const routes: Routes = [
  {
    path: '',
    component: CorollaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorollaPageRoutingModule {}
