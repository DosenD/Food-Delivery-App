import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartItem } from 'src/app/shared/menu-item.model';
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

  quantityArr:[] = []

  constructor(
   private cartService: CartService,
   private router: Router,
   private browserStorageService: BrowserStorageService,
  ) {}

  calcSum() {
    //def calcSum so we can use it in multiple places,tried putting it in cart.service but something's not working
    this.sum = 0; //must reset sum to zero before looping through cartItems
    this.cartItems.forEach((item) => {
      this.sum += item.product.price * item.quantity;
      return this.sum;
    });
  }

  ngOnInit() {
    this.cartItemsSub = this.cartService.items.subscribe( result => {
     if(result.length){
      this.cartItems = result;
      this.calcSum()
     } else if (!result.length) {
      result = JSON.parse(sessionStorage.getItem('key')!);
      //result = this.cartService.fillItemsSubject();
      this.cartItems = result
      this.calcSum();
     
     }
      
     
      /* else if (!result.length) {
       this.cartItems = JSON.parse(sessionStorage.getItem('data')!);
       this.calcSum();}
       */if (!this.cartItems.length) {  //if cartItems has no lenght set sum to zero, otherwise it's nothing
        this.sum = 0;
      }
     
    });
   // this.cartService.updateItems()
    sessionStorage.setItem('key', JSON.stringify(this.cartItems));
  }
  
  onChangeSum(index: number) {
   this.cartService.deleteItems(index)
   this.calcSum();
   sessionStorage.setItem('key', JSON.stringify(this.cartItems));
 }
 
  goBack() {
    this.router.navigate(['/pork']);
  }

  goForward() {
    this.router.navigate(['/checkOut']);
  }

  ngOnDestroy() {
   this.cartItemsSub.unsubscribe();
 }

}
