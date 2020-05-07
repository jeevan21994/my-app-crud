import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductupdateComponent } from './productupdate.component';

const routes: Routes = [{ path: '', component: ProductupdateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductupdateRoutingModule { }
