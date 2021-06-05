import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem, OrderItem } from 'src/app/shared/all-models';
import { BrowserStorageService } from '../../services/browser-storage.service';
import { Subscription } from 'rxjs';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { formatDate } from '@angular/common';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent implements OnInit, OnDestroy {
  constructor(
    private cartService: CartService,
    private browserStorageService: BrowserStorageService,
    private fb: FormBuilder,
    private db: AngularFireDatabase
  ) {}

  private cartItemsSub!: Subscription;
  @ViewChild('myForm') myForm!: NgForm;
  cartItem!: CartItem;
  cartItems!: CartItem[];
  orderItem!: OrderItem;
  orderItems: OrderItem[] = [];
  form!: FormGroup;
  sum = 0;
  nowArray: number[] = [];
  cartEmpty = false;
  storeClosed = false;
  orderSent = false;
  orderReceived = false;
  checked = false;

  ngOnInit(): void {
    this.cartItemsSub = this.cartService.items.subscribe((result) => {
      this.cartItems = result;
      this.cartItems.forEach((a) => (this.sum += a.product.price * a.quantity));
      return this.cartItems;
    });
    this.db
       .list('orders')
       .valueChanges()
       .pipe(
         map((resData) => {
          this.orderItems = [];
           this.orderItems.push(...(resData as OrderItem[]));
           return this.orderItems;
         })
       )
       .subscribe(
         (result: OrderItem[]) => {
          const orderItem: OrderItem = this.browserStorageService.getSession('orderItem');
          if(orderItem){
           this.orderItems.map(item => {
            if(orderItem.itemId === item.itemId && orderItem.checked !== item.checked){
             console.log('Fuck Me Dead This Works!!!')
             this.orderSent = false;
             this.orderReceived = true;
            }
           })
          } else {
           console.log('No data in session storage')
          }
          
         },
         (error) => {
           if (error) {
             throw new Error(
               'Error has occurred, no data has been retrieved!'
             );
           }
         }
       );
     

    this.form = this.fb.group({
      firstName: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z]{3,20}$/),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z]{3,20}$/),
      ]),
      streetName: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z\s]{3,40}$/),
      ]),
      houseOrBuildingNum: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[0-9]{1,4}$/),
      ]),
      apartmentNum: new FormControl(null, [
        Validators.pattern(/^[0-9]{1,4}$/),
      ]),
      phoneNum: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[0-9]{6,14}$/),
      ]),
    });
  }

  ngOnDestroy(): void {
    this.cartItemsSub.unsubscribe();
  }
  // input value getters

  get firstName() {
    return this.form.get('firstName');
  }
  get lastName() {
    return this.form.get('lastName');
  }
  get fullName() {
    return this.firstName?.value.concat(' ', this.lastName?.value);
  }
  get streetName() {
    return this.form.get('streetName');
  }
  get houseOrBuildingNum() {
    return this.form.get('houseOrBuildingNum');
  }
  get apartmentNum() {
    return this.form.get('apartmentNum');
  }
  get phoneNumber() {
    return this.form.get('phoneNum');
  }

  get itemId() {
    const itemId = Math.random().toString(36).substr(2, 9);
    return itemId;
  }

  addOrder(): void {
    const now = new Date();
    const workHours = +now.getHours();
    const order: OrderItem = {
      items: this.cartItems,
      sum: this.sum,
      fullName: this.fullName,
      streetName: this.streetName?.value,
      houseOrBuildNum: this.houseOrBuildingNum?.value,
      apartmentNum: this.apartmentNum?.value,
      phoneNum: this.phoneNumber?.value,
      createdAt: formatDate(now, 'dd/MM/yyyy HH:mm:ss ', 'en-us'), //formatiramo date object i prebacujemo ga u string
      itemId: this.itemId,
      checked: this.checked,
    } as OrderItem;

    if (!this.cartItems.length) {
      this.cartEmpty = true;
      this.myForm.resetForm();
      this.cartService.resetItems();
      this.browserStorageService.removeSession();
    } else {
      this.db.list('orders').push(order);
      this.myForm.resetForm();
      this.cartService.resetItems();
      this.browserStorageService.removeItem('cartItem');
      this.browserStorageService.setOrderItem('orderItem', order);  
      this.orderSent = true;
    }
  }
  closeMessage() {
    this.cartEmpty = false;
    this.storeClosed = false;
    this.orderSent = false;
    this.orderReceived = false;
  }
}
