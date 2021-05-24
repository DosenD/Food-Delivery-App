import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem, OrderItem } from 'src/app/shared/product-cart-item.model';
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
  cartItem!: CartItem;
  cartItems: CartItem[] = [];
  form!: FormGroup;
  sum = 0;

  ngOnInit(): void {
   this.cartItemsSub = this.cartService.items.subscribe(result => {
    this.cartItems = result;
    this.cartItems.forEach(a => this.sum += a.product.price * a.quantity)

   });

   this.form = this.fb.group ({
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    streetName: new FormControl(null, Validators.required),
    houseOrBuildingNum: new FormControl(null, Validators.required),
    apartmentNum: new FormControl(null, Validators.required),
    phoneNum: new FormControl(null, Validators.required),
   });
  }

  ngOnDestroy(): void{
   this.cartItemsSub.unsubscribe();
  }
  // input value getters

  get firstName(){
   return this.form.get('firstName');
  }

  get lastName(){
    return this.form.get('lastName');
  }
  get streetName(){
    return this.form.get('streetName');
  }
  get houseOrBuildingNum(){
    return this.form.get('houseOrBuildingNum');
  }
  get apartmentNum(){
    return this.form.get('apartmentNum');
  }
  get phoneNumber(){
    return this.form.get('phoneNum');
  }


  addOrder(): void{
  const order: OrderItem = {
    item: this.cartItem,
    firstName: this.firstName?.value,
    lastName: this.lastName?.value,
    streetName: this.streetName?.value,
    houseOrBuildNum: this.houseOrBuildingNum?.value,
    apartmentNum: this.apartmentNum?.value,
    phoneNum: this.phoneNumber?.value,
    } as OrderItem;
  console.log(order);
  }

}
