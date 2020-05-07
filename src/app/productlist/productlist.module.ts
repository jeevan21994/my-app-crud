import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';

import { ProductlistRoutingModule } from './productlist-routing.module';
import { ProductlistComponent } from './productlist.component';

import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [ProductlistComponent],
  imports: [
    CommonModule,
    ProductlistRoutingModule,
    MatIconModule,
    MatDialogModule,ReactiveFormsModule,
    FormsModule,MatSnackBarModule
  ]
})
export class ProductlistModule { }
