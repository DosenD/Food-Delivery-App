import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product, CartItem } from 'src/app/shared/product-cart-item.model';
import { Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit, OnDestroy {

  constructor(private cartService: CartService, private fb: FormBuilder) { }

  private cartItemsSub!: Subscription;
  cartItem!:CartItem;
  cartItems: CartItem[] = [];
  form!: FormGroup;
  firstName!: FormControl;
  lastName!: FormControl;
  sum:number = 0;
 
 
  
  ngOnInit(): void {
   this.cartItemsSub = this.cartService.items.subscribe(result => {
    this.cartItems = result;
    this.cartItems.forEach(a => this.sum += a.product.price * a.quantity)

   })

   this.form = this.fb.group ({
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    streetName: new FormControl(null, Validators.required),
    houseOrBuildingNum: new FormControl(null, Validators.required),
    appartmentNum: new FormControl(null, Validators.required),
    
   })
  }

  ngOnDestroy(){
   this.cartItemsSub.unsubscribe()
  }
  getFirstName(){
   return this.form.get('firstName')
  }

  addOrder(){
   

  }

}
