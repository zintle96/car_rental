import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeactivateUPage } from './deactivate-u.page';

const routes: Routes = [
  {
    path: '',
    component: DeactivateUPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeactivateUPageRoutingModule {}
