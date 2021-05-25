import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../shared/all-models';
import { BrowserStorageService } from '../services/browser-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsSubject = new BehaviorSubject<CartItem[]>([]);
  public items = this.itemsSubject.asObservable();
  cartItems!: CartItem[];
  key!: string;

  constructor(private browserStorageService: BrowserStorageService) { }

  addItems(data: CartItem): void{
   const storeData =  [...this.itemsSubject.value, ...[data]];
   const updateData = this.browserStorageService.getSession( 'cartItem');
   if (updateData){
    updateData.push(data);
    this.browserStorageService.setSessionData(updateData);
    this.itemsSubject.next(updateData);
   }else {
    this.browserStorageService.setSessionData(storeData);
    this.itemsSubject.next(storeData);
   }
  }
  checkSessionData(): void{
   const getStoredData = this.browserStorageService.getSession('cartItem');
   if (getStoredData){
    this.itemsSubject.next(getStoredData);
   }
  }

  deleteItems(index: number): void{
   const updateData = this.browserStorageService.getSession('cartItem');
   updateData.splice(index, 1);
   this.browserStorageService.setSessionData(updateData);
   this.itemsSubject.next(updateData);
  }


  resetItems(): void {
   this.itemsSubject.next([]);
  }
}
