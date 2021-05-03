import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { CartItem, Product } from 'src/app/shared/menu-item.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  form!: FormGroup;
  quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  toppingList: string[] = ['majonez', 'pavlaka', 'kecap', 'bez namaza'];
  saladList: string[] = ['kupus', 'zelena salata', 'paradajz', 'bez salate'];
  cartItems: CartItem[] = [];
 
  @Input() item!: Product;
  

  constructor(private fb: FormBuilder, private cartService: CartService) {}

  ngOnInit() {
    this.form = this.fb.group({
      quantity: new FormControl(1, Validators.required),
      toppings: new FormControl(null, Validators.required),
      salads: new FormControl(null, Validators.required),
    });
  }

  get quantityControl() {
    return this.form.get('quantity');
  }
  get toppingsChoice() {
    return this.form.get('toppings');
  }
  get saladChoice() {
    return this.form.get('salads');
  }

  addToCart() {
    const item = new CartItem(
     this.item,
     this.quantityControl?.value,
     this.toppingsChoice?.value,
     this.saladChoice?.value,
    );
    this.cartService.addItems(item);
    
  }
}

