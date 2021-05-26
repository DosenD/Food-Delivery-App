import { Component, Input } from '@angular/core';
import { Product } from '../all-models';
import { MatDialog } from '@angular/material/dialog';
import { ProductItemComponent } from '../product-item/product-item.component';

export interface DialogData {
 name: string;
 imagePath: string;
 description: string;
 price: number;
 type: string;
}



@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent {
 @Input() listItem!: Product;

  constructor(
   public dialog: MatDialog
  ) { }


  openDialog(): void {
   const dialogRef = this.dialog.open(ProductItemComponent, {
     width: '350px',
     data: {
       name: this.listItem.name,
       description: this.listItem.description,
       imagePathMed: this.listItem.imagePathMed,
       price: this.listItem.price,
       type: this.listItem.type
     }
   });

   /*dialogRef.afterClosed().subscribe(result => {
     console.log('The dialog was closed');
     this.name = result;
   });*/
 }
}




