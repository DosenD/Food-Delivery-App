import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from '../menu-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent  {
 @Input() item!:CartItem;
 @Input() index!:number;
 @Output() updatePrice = new EventEmitter<number>()
 
 
  constructor(private cartService: CartService) { }


  cartItems:CartItem[] = [];
  
  onDeleteItem(index:number){
  //this.cartService.deleteItems(index);
   this.updatePrice.emit(index);
  }

}
