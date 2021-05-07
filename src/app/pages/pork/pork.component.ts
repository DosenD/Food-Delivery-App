import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product-cart-item.model';

@Component({
  selector: 'app-pork',
  templateUrl: './pork.component.html',
  styleUrls: ['./pork.component.scss'],
})
export class PorkComponent implements OnInit {
  productItems: Product[] = [
    {
      name: 'Pljeva',
      imagePath: '../../../assets/images/pork/gurmanska-pljeskavica.jpg',
      description: 'Pljeva koja je napravljena od cistog mesa.',
      type: 'pork',
      price: 250,
    } as Product,
    {
      name: 'Ćevapi',
      imagePath: '../../../assets/images/pork/cevapi_sb_123.jpg',
      description: 'Mala porcija cevapa pravljenih od svezeg mesa.',
      type: 'pork',
      price: 300,
    } as Product,
    {
      name: 'Vešalica',
      imagePath: '../../../assets/images/pork/punjena_bela.jpg',
      type: 'pork',
      description: 'Bela vešalica punjena sirom, i tako to neki opis.',
      price: 400,
    } as Product,
    {
      name: 'Kobasica',
      imagePath: '../../../assets/images/pork/Sausage_SB.jpg',
      type: 'pork',
      description: 'Domaće kobasice na roštilju i tako to neki opis.',
      price: 350,
    } as Product,
  ];

  constructor() {}

  ngOnInit() {}
}
