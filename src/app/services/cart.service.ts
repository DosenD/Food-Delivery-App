import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from "../shared/menu-item.model"

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsSubject = new BehaviorSubject<CartItem[]>([]);
  public items = this.itemsSubject.asObservable();
  cartItems!:CartItem[];
  sum!:number;
  constructor() { }

  addItems(data: CartItem){
    this.itemsSubject.next([...this.itemsSubject.value, ...[data]]);
  }

  updateItems(){
   this.itemsSubject.next(this.cartItems)
  }
  
  deleteItems(index:number){
   this.itemsSubject.value.splice(index, 1);
   this.itemsSubject.next(this.itemsSubject.value)
  }


  resetItems() {
   this.itemsSubject.next([]);
  }


}
