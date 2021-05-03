import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartItem } from 'src/app/shared/menu-item.model';
import { CartService } from '../../services/cart.service';
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

  constructor(private cartService: CartService, private router: Router) {}

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
      if (result.length && sessionStorage.getItem('data') !== null) {
       this.localData = JSON.parse(sessionStorage.getItem('data')!);
       this.resultData = result;
       this.cartItems = [...this.localData, ...this.resultData];
       this.calcSum();
      }else if (result.length){
       this.cartItems = result;
       this.calcSum();
      } else if (!result.length) {
       this.cartItems = JSON.parse(sessionStorage.getItem('data')!);
       this.calcSum();
      } else if (!this.cartItems.length) {  //if cartItems has no lenght set sum to zero, otherwise it's nothing
        this.sum = 0;
      }
     
    });

    sessionStorage.setItem('data', JSON.stringify(this.cartItems));
  }
  
  onChangeSum(index: number) {
   this.cartItems.splice(index, 1);
   //this.cartService.updateItems()
   this.cartItems = this.cartItems
   console.log('Something happend')
   this.calcSum();
   sessionStorage.setItem('data', JSON.stringify(this.cartItems));
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
