import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
     path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
     path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) 
  }, 
  {
   path: 'productlist', loadChildren: () => import('./productlist/productlist.module').then(m => m.ProductlistModule)
  },
  {
     path: 'productcreate', loadChildren: () => import('./productcreate/productcreate.module').then(m => m.ProductcreateModule)
  },
  {
     path: 'productupdate', loadChildren: () => import('./productupdate/productupdate.module').then(m => m.ProductupdateModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
