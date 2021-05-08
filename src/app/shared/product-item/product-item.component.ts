import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTooltip } from '@angular/material/tooltip';
import { CartService } from 'src/app/services/cart.service';
import { CartItem, Product } from 'src/app/shared/product-cart-item.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
 @ViewChild('tooltip') tooltip!: MatTooltip;
  form!: FormGroup;
  quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  toppingList: string[] = ['majonez', 'pavlaka', 'kecap', 'bez namaza'];
  saladList: string[] = ['kupus', 'zelena salata', 'paradajz', 'bez salate'];
  cartItems: CartItem[] = [];
  isTooltipDisabled:boolean = true;
 
  @Input() item!: Product;
  

  constructor(private fb: FormBuilder, private cartService: CartService) {}

  ngOnInit() {
    this.form = this.fb.group({
      quantity: new FormControl(1, Validators.required),
      toppings: new FormControl(null, Validators.required),
      salads: new FormControl(null, Validators.required),
    });
  }
  
  //[matTooltipDisabled]="isTooltipDisabled ? true : false"  matTooltip="Tooltip!"

  get quantityControl() {
    return this.form.get('quantity');
  }
  get toppingsChoice() {
    return this.form.get('toppings');
  }
  get saladChoice() {
    return this.form.get('salads');
  }

  showAndHideTooltip(){
   this.tooltip.show()
   setTimeout(()=>{
    this.tooltip.hide()
   }, 2000)
  }

  addToCart() {
    const item = new CartItem(
     this.item,
     this.quantityControl?.value,
     this.toppingsChoice?.value,
     this.saladChoice?.value,
    );
    this.cartService.addItems(item);
    setInterval(()=> {
     this.form.reset()
    }, 3000)
  }
}

