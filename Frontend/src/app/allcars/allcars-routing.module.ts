import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllcarsPage } from './allcars.page';

const routes: Routes = [
  {
    path: '',
    component: AllcarsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllcarsPageRoutingModule {}
