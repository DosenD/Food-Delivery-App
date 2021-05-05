import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../menu-item.model';
import { CartService } from '../../services/cart.service';

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
   //this.updatePrice.emit(index);
   this.cartService.deleteItems(index)
   console.log(index)
  }

}
