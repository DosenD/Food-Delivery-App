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
  showFiller: boolean = false;
  isOpen: boolean = false;
  private itmNumberSub!: Subscription;
  cartItems: CartItem[] = [];
  itemNumber: number = 0;
  showItemNum: boolean = false;
  burgerActive: boolean = false;

  getItemNumber() {
    this.itemNumber = 0;
    if (!this.cartItems) {
      return;
    } else {
      this.cartItems.forEach((item) => {
        this.itemNumber += item.quantity;
        return this.itemNumber;
      });
    }
  }

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.checkSessionData();
    this.itmNumberSub = this.cartService.items.subscribe(result => {
      this.cartItems = result;
      this.getItemNumber()
      if (this.itemNumber === 0) {
        this.showItemNum = false;
      } else {
        this.showItemNum = true;
      }
    });
  }

  
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

  ngOnDestroy() {
    this.itmNumberSub.unsubscribe();
  }
}
