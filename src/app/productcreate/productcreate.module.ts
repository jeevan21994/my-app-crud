import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ProductcreateRoutingModule } from './productcreate-routing.module';
import { ProductcreateComponent } from './productcreate.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [ProductcreateComponent],
  imports: [
    CommonModule,
    ProductcreateRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class ProductcreateModule { }
