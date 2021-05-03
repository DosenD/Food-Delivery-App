import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from '../shared/menu-item.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  showFiller = false;
  isOpen = false;
  private itmNumberSub!: Subscription;
  cartItems: CartItem[] = [];
  itemNumber: number = 0;
  showItemNum: boolean = false;

  getItemNumber() {
    this.itemNumber = 0;
    this.cartItems.forEach((item) => {
      this.itemNumber += item.quantity;
      return this.itemNumber;
    });
  }

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.itmNumberSub = this.cartService.items.subscribe((result) => {
      if (result.length) {
        this.cartItems = result;
        this.getItemNumber();
      } else if (!result.length) {
        this.cartItems = JSON.parse(sessionStorage.getItem('data')!);
        this.getItemNumber()
      } 
      if (this.itemNumber === 0) {
        this.showItemNum = false;
      } else {
        this.showItemNum = true;
      }
    });
  }
  
  burgerActive = false;
  isActive(event: Event) {
    event.preventDefault();
    this.burgerActive = !this.burgerActive;
  }
  fillerToggle(event: Event) {
    event.preventDefault();
    this.showFiller = !this.showFiller;
  }
  toggleIsOpen() {
    this.isOpen = !this.isOpen;
  }
  closeSideNav() {
    this.isOpen = false;
    this.burgerActive = false;
  }

  ngOnDestroy(){
   this.itmNumberSub.unsubscribe();
  }



}
