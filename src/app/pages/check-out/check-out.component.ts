import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem, OrderItem } from 'src/app/shared/all-models';
import { BrowserStorageService } from '../../services/browser-storage.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { formatDate } from '@angular/common';



@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit, OnDestroy {

  constructor(
    private cartService: CartService,
    private browserStorageService: BrowserStorageService,
    private fb: FormBuilder,
    private db: AngularFireDatabase,
    ) { }

  private cartItemsSub!: Subscription;
  cartItem!: CartItem;
  cartItems!: CartItem[];
  form!: FormGroup;
  sum = 0;
  nowArray: number[] = [];

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
  const now = new Date();
  const workHours = +now.getHours();
  const nowString = formatDate(new Date(), 'HH:mm:ss dd/MM/yyyy', 'en-us');
  const order: OrderItem = {
    items: this.cartItems,
    fullName: this.fullName,
    streetName: this.streetName?.value,
    houseOrBuildNum: this.houseOrBuildingNum?.value,
    apartmentNum: this.apartmentNum?.value,
    phoneNum: this.phoneNumber?.value,
    createdAt: nowString,
    } as OrderItem;
  if (workHours > 22 || workHours < 8 ){
        alert(' ZATVORENO KONJU JEDAN!!!');
        this.form.reset();
        this.form.clearValidators();
        this.cartService.resetItems();
        this.browserStorageService.removeSession();
     }
  else if (workHours > 8 || workHours < 22){
    this.db.list('orders').push(order);
    this.form.clearValidators();
    this.cartService.resetItems();
    this.browserStorageService.removeSession();
    alert('Dobicete potvrdu o prijemu porudzbine');
   }
  }

}
