import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { SuperPageModule } from './super/super.module';
// import { SuperPage } from './super/super.page';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // {path:'super',component:SuperPage},
  {
    path: 'login',
    loadChildren:() => import('./components/login/login.module').then ( m => m.LoginPageModule)
  },

  {
    path: 'registration',
    loadChildren: () => import('./components/registation/registation.module').then (m => m.RegistationPageModule)},
  {
    path: 'booking',
    loadChildren: () => import('./pages/booking/booking.module').then( m => m.BookingPageModule)
  },
  {
    path: 'cars',
    loadChildren: () => import('./cars/cars.module').then( m => m.CarsPageModule)
  },
  {
    path: 'hilux',
    loadChildren: () => import('./hilux/hilux.module').then( m => m.HiluxPageModule)
  },
  {
    path: 'corolla',
    loadChildren: () => import('./corolla/corolla.module').then( m => m.CorollaPageModule)
  },
  {
    path: 'allcars',
    loadChildren: () => import('./allcars/allcars.module').then( m => m.AllcarsPageModule)
  },
  {
    path: 'models',
    loadChildren: () => import('./models/models.module').then( m => m.ModelsPageModule)
  },

  { path: 'dash',
   loadChildren: () => import('./components/dashboard/dashboard.module').then( m => m.DashboardPageModule) },
  {
    path: 'kia',
    loadChildren: () => import('./kia/kia.module').then( m => m.KiaPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule)
  },

  // {
  //   path: 'dashboard',
  //   loadChildren: () => import('./components/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  // }

  {
    path: 'userp',
    loadChildren: () => import('./userp/userp.module').then( m => m.UserpPageModule)
  },
  {
    path: 'up',
    loadChildren: () => import('./uppass/uppass.module').then( m => m.UppassPageModule)
  },
  {
    path: 'deac',
    loadChildren: () => import('./deactivate-u/deactivate-u.module').then( m => m.DeactivateUPageModule)
  },
  {
    path: 'dash-u',
    loadChildren: () => import('./dashboard-u/dashboard-u.module').then( m => m.DashboardUPageModule)
  },
  {
    path: 'add-admin',
    loadChildren: () => import('./add-admin/add-admin.module').then( m => m.AddAdminPageModule)
  },
  {
    path: 'super',
    loadChildren: () => import('./super/super.module').then( m => m.SuperPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
