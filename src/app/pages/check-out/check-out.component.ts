import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem, OrderItem } from 'src/app/shared/all-models';
import { Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import {formatDate} from '@angular/common';



@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit, OnDestroy {

  constructor(
    private cartService: CartService,
    private fb: FormBuilder,
    private db: AngularFireDatabase) { }

  private cartItemsSub!: Subscription;
  cartItem!: CartItem;
  cartItems!: CartItem[];
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
  get fullName(){
    return this.firstName?.value.concat(' ', this.lastName?.value);
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
  const now = formatDate(new Date(), 'HH:mm dd/MM/yyyy', 'en-US');
  const order: OrderItem = {
    items: this.cartItems,
    fullName: this.fullName,
    streetName: this.streetName?.value,
    houseOrBuildNum: this.houseOrBuildingNum?.value,
    apartmentNum: this.apartmentNum?.value,
    phoneNum: this.phoneNumber?.value,
    date: now,
    } as OrderItem;
  console.log(typeof now);
  this.db.list('orders').push(order);
  }

}
