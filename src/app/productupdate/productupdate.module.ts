import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductupdateRoutingModule } from './productupdate-routing.module';
import { ProductupdateComponent } from './productupdate.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [ProductupdateComponent],
  imports: [
    CommonModule,
    ProductupdateRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule
  ]
})
export class ProductupdateModule { }
