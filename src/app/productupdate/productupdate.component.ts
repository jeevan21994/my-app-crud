import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-productupdate',
  templateUrl: './productupdate.component.html',
  styleUrls: ['./productupdate.component.css']
})
export class ProductupdateComponent implements OnInit {
  productUpdate:FormGroup
  product_id;
  constructor(public fb:FormBuilder, private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ProductupdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data);
    this.productUpdate=this.fb.group({
      'firstname': ['',Validators.required],
      'lastname':  ['',Validators.required],
      'email':  ['',Validators.required]
    })
   }

   closeDialog() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.updateForm()
  }

  /* 
  edit form 
  */
  updateForm(){
    this.productUpdate = this.fb.group({
      'id':'',
      'firstname':'',
      'lastname':  '',
      'email':  ''
    });
    this.productUpdate.controls['id'].setValue(this.data.id)
     this.productUpdate.controls['firstname'].setValue(this.data.firstname)
    this.productUpdate.controls['lastname'].setValue(this.data.lastname)
   this.productUpdate.controls['email'].setValue(this.data.email)
  }

  /**
   * update form
   */
  updateProduct(){
 let item = {
        id: this.productUpdate.controls['id'].value,
        firstname: this.productUpdate.controls['firstname'].value,
        lastname: this.productUpdate.controls['lastname'].value,
        email: this.productUpdate.controls['email'].value
      }
      console.log(item);
    if(item){
        this.snackBar.open('Product update successfully' ,'Dissmiss' ,{duration :2000})
        this.dialogRef.close(item);
       }
  }
}
