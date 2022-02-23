import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserpPage } from './userp.page';

const routes: Routes = [
  {
    path: '',
    component: UserpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserpPageRoutingModule {}
