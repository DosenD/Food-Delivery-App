import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartItem } from 'src/app/shared/all-models';
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
  sum = 0;
  data!: any;
  cartItems: CartItem[] = [];
  localData: CartItem[] = [];


  constructor(
   private cartService: CartService,
   private router: Router,
   private browserStorageService: BrowserStorageService,
  ) {}

  calcSum(): void {
    this.sum = 0;                 // must reset sum to zero before looping through cartItems
    this.cartItems.forEach((item: CartItem) => {
      this.sum += item.product.price * item.quantity;
      return this.sum;
    });
  }

  ngOnInit(): void {
    this.cartService.checkSessionData();
    this.cartItemsSub = this.cartService.items.subscribe( result => {
     this.cartItems = result;
     this.calcSum();
    });
  }

  onChangeSum(index: number): void {
   this.cartService.deleteItems(index);
   this.calcSum();
   this.browserStorageService.setSessionData(this.cartItems);
 }

  goBack(): void {
    this.router.navigate(['/menu']);
  }

  goForward(): void {
    this.router.navigate(['/checkOut']);
  }

  clearItems(): void{
    this.cartService.resetItems();
    this.browserStorageService.removeSession();
  }

  ngOnDestroy(): void {
   this.cartItemsSub.unsubscribe();
 }

}
