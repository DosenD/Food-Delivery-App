import { Component, OnInit } from '@angular/core';
import { ProductGroup } from '../../shared/product-cart-item.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

 productGroups: ProductGroup[] = [
  {
   name: 'Proizvodi od svinjskog mesa',
   imagePath: '../../../assets/images/pork-products.jpg',
   description: 'Proizvodi od svinjskog mesa obuhvataju široku ponudu specijaliteta pravljenih od najkvalitetnijih sirovina',
   linkToGroup: '/pork'
  } as ProductGroup,
  {
   name: 'Proizvodi od pilećeg mesa',
   imagePath: '../../../assets/images/chicken-products.jpg',
   description: 'Proivodi od pilećeg mesa obuhvataju široku ponudu specijaliteta pravljenih od najkvalitetnijih sirovina',
   linkToGroup: '/chicken'
  } as ProductGroup,
  {
   name: 'Sendviči',
   imagePath: '../../../assets/images/sandwiches.jpg',
   description: 'Pogledajte nasu siroku ponudu senviča',
   linkToGroup: '/sandwiches'
  } as ProductGroup,
 ]

  constructor() { }

  ngOnInit(): void {
  }

}
