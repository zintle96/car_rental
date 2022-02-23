import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardUPage } from './dashboard-u.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardUPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardUPageRoutingModule {}
