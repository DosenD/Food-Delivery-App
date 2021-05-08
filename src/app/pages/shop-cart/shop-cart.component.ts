import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartItem } from 'src/app/shared/product-cart-item.model';
import { CartService } from '../../services/cart.service';
import { BrowserStorageService } from '../../services/browser-storage.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.scss'],
})
export class ShopCartComponent implements OnInit, OnDestroy {
  index!: number;
  private cartItemsSub!: Subscription;
  sum: number = 0;
  data!: any;
  duplicateItemSum!: number;

  cartItems: CartItem[] = [];
  localData: CartItem[] = [];
  resultData: CartItem[] = [];
  quantityArr: [] = [];
  

  constructor(
   private cartService: CartService,
   private router: Router,
   private browserStorageService: BrowserStorageService,
  ) {}

  calcSum() {
    this.sum = 0;                 //must reset sum to zero before looping through cartItems
    this.cartItems.forEach((item) => {
      this.sum += item.product.price * item.quantity;
      return this.sum;
    });
  }
  
  ngOnInit() {
    this.cartService.checkSessionData()
    this.cartItemsSub = this.cartService.items.subscribe( result => {
     this.cartItems = result
      this.calcSum();
    });
  }
  
  onChangeSum(index: number) {
   this.cartService.deleteItems(index)
   this.calcSum();
   this.browserStorageService.setSessionData(this.cartItems);
 }
 
  goBack() {
    this.router.navigate(['/menu']);
  }

  goForward() {
    this.router.navigate(['/checkOut']);
  }

  ngOnDestroy() {
   this.cartItemsSub.unsubscribe();
 }

}
