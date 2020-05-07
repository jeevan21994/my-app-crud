import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductcreateComponent } from './productcreate.component';

const routes: Routes = [{ path: '', component: ProductcreateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductcreateRoutingModule { }
