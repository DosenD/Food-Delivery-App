import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from "../shared/menu-item.model"
import { BrowserStorageService } from "../services/browser-storage.service"

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsSubject = new BehaviorSubject<CartItem[]>([]);
  public items = this.itemsSubject.asObservable();
  cartItems!:CartItem[];
  sum!:number;
  key!:string
  constructor(private browserStorageService: BrowserStorageService) { }

  addItems(data: CartItem){
    this.itemsSubject.next([...this.itemsSubject.value, ...[data]]);
  }

  fillItemsSubject():any{
  
    this.itemsSubject.value === JSON.parse(sessionStorage.getItem('key')!);
   // this.itemsSubject.next(this.itemsSubject.value)
    return this.itemsSubject.value

   
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
