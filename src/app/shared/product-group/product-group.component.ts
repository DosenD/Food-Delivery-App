import { Component, Input, OnInit } from '@angular/core';
import { ProductGroup } from '../../shared/product-cart-item.model';

@Component({
  selector: 'app-product-group',
  templateUrl: './product-group.component.html',
  styleUrls: ['./product-group.component.scss']
})
export class ProductGroupComponent implements OnInit {
 @Input() item!: ProductGroup;
  productGroups!: ProductGroup[];
  constructor() { }

  ngOnInit(): void {
  }
 
}
