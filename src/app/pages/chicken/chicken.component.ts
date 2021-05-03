import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/menu-item.model';

@Component({
  selector: 'app-chicken',
  templateUrl: './chicken.component.html',
  styleUrls: ['./chicken.component.scss']
})
export class ChickenComponent implements OnInit {

 productItems: Product[] = [
  {
   name: 'Pileće belo meso',
   imagePath: '../../../assets/images/Chicken/chicken-breasts1.jpg',
   description: 'Pileće belo meso na žaru.',
   type: 'chicken',
   price: 350,
 } as Product,
 {
  name: 'Pileći bataci',
  imagePath: '../../../assets/images/Chicken/grilled-chicken-drums.jpg',
  description: 'Otkošteni pileći bataci na žaru.',
  type: 'chicken',
  price: 300,
} as Product,
{
 name: 'Pileći ražnjić',
 imagePath: '../../../assets/images/Chicken/chicken-kebab.jpg',
 description: 'Pileći ražnjić na žaru.',
 type: 'chicken',
 price: 300,
} as Product,
{
 name: 'Pileća krilca',
 imagePath: '../../../assets/images/Chicken/chicken-wings.jpg',
 description: 'Pikantna pileća krilca na žaru',
 type: 'chicken',
 price: 250,
} as Product,
  
 ]
 

  constructor() { }

  ngOnInit(): void {
  }

  

}
