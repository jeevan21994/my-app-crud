import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.css']
})
export class ProductcreateComponent implements OnInit {
  productform:FormGroup;
  constructor(public fb : FormBuilder,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ProductcreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) 
    {
    this.productform=this.fb.group({
      'id':['',Validators.required],
      'firstname': ['',Validators.required],
      'lastname':  ['',Validators.required],
      'email':  ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }
 
  closeDialog() {
    this.dialogRef.close();
  }
  createProduct() {
      let item = {
        id: this.productform.controls['id'].value,
        firstname: this.productform.controls['firstname'].value,
        lastname: this.productform.controls['lastname'].value,
        email: this.productform.controls['email'].value
      }
      console.log(item);
    if(item){
        this.snackBar.open('Product inserted' ,'Dissmiss' ,{duration :2000})
        this.dialogRef.close(item);
        // this.productArray.push(item)
       }
  }
  
}
