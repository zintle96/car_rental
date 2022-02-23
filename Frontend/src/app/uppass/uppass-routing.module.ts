import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UppassPage } from './uppass.page';

const routes: Routes = [
  {
    path: '',
    component: UppassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UppassPageRoutingModule {}
