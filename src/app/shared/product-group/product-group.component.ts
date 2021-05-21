import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Product, ProductGroup } from '../../shared/product-cart-item.model';

@Component({
  selector: 'app-product-group',
  templateUrl: './product-group.component.html',
  styleUrls: ['./product-group.component.scss'],
})
export class ProductGroupComponent implements OnInit {
  @Input() groupItem!: ProductGroup;
  productGroups!: ProductGroup[];
  productList: Product[] = [];
  barbList: Product[] = [];
  sandList: Product[] = [];

  constructor(private db: AngularFireDatabase) {}

  ngOnInit(): void {
    this.db
      .list('products')
      .valueChanges()
      .pipe(
        map((resData) => {
          this.productList.push(...(resData as Product[]));
          if (this.groupItem.type === 'barbecue') {
            this.productList.map((item) => {
              if (item.type === 'barbecue') {
                this.barbList.push(item as Product);
              }
              return this.barbList;
            });
          }
          if (this.groupItem.type === 'sandwich') {
            this.productList.map((item) => {
              if (item.type === 'sandwich') {
                this.sandList.push(item as Product);
              }
              return this.sandList;
            });
          }
        })
      )
      .subscribe(
        (result) => {
          // console.log(result);
        },
        (error) => {
          if (error) {
            throw 'Error has occured, no data has been retreved!';
          }
        }
      );
  }
}
