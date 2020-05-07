import { Component, OnInit } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { ProductcreateComponent } from '../productcreate/productcreate.component';
import { Router } from '@angular/router';
import { MatDialog} from '@angular/material/dialog';
import { ProductupdateComponent } from '../productupdate/productupdate.component';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private snackbar :MatSnackBar,
  ) { }
  productArray=[
               {id:1,firstname:'ram' ,lastname:'chouhan',email:'ram@gmail.com'},
               {id:2,firstname:'mohan' ,lastname:'sharma',email:'mohan@gmail.com'}
               ]
  ngOnInit(): void {
  }

  /**
   * add form
   */
  goToAdd(): void {
    const dialogRef = this.dialog.open(ProductcreateComponent, {
      width: '500px',
      height: 'auto',
      disableClose: true,
      autoFocus: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
        this.productArray.push(result)
      }
    });
  }
  
  /**
   * 
   * @param i delete record from list
   */
  delete(i){
    this.productArray.splice(this.productArray.indexOf(i), 1);
    var message = " delete successfully"
    this.snackbar.open(message, "Dismiss", {
      duration: 2000,
    });
  }

  /**
   * 
   * @param item edit form
   */
  edit(item){
    const dialogRef = this.dialog.open(ProductupdateComponent, {
      width: '500px',
      height: 'auto',
      disableClose: true,
      autoFocus: true,
      data:item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      for (let i = 0; i < this.productArray.length; i++) {
        if (this.productArray[i].id === result.id) {
          this.productArray[i] = result
        }
      }
    });
  }
}
