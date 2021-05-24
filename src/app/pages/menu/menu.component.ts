import { Component, OnInit } from '@angular/core';
import { ProductGroup } from '../../shared/product-cart-item.model';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  prodGroupArr: ProductGroup[] = []; /*= [
  {
   name: 'Proizvodi od svinjskog mesa',
   imagePath: '../../../assets/images/pork-products.jpg',
   description: 'Proizvodi od svinjskog mesa obuhvataju široku ponudu specijaliteta pravljenih od najkvalitetnijih sirovina.',
   linkToGroup: '/pork'
  } as ProductGroup,
  {
   name: 'Proizvodi od pilećeg mesa',
   imagePath: '../../../assets/images/chicken-products.jpg',
   description: 'Proizvodi od pilećeg mesa obuhvataju široku ponudu specijaliteta pravljenih od najkvalitetnijih sirovina.',
   linkToGroup: '/chicken'
  } as ProductGroup,
  {
   name: 'Sendviči',
   imagePath: '../../../assets/images/sandwiches.jpg',
   description: 'Pogledajte nasu siroku ponudu senviča.',
   linkToGroup: '/sandwiches'
  } as ProductGroup,
 ]*/

  constructor(private db: AngularFireDatabase) {}

  ngOnInit(): void {
    this.db
      .list('product-groups')
      .valueChanges()
      .pipe(
        map((resData) => {
          this.prodGroupArr.push(...resData as ProductGroup[]);
          return this.prodGroupArr;
        })
      )
      .subscribe(
        (result: ProductGroup[]) => {
         // console.log(result);
        },
        (error) => {
          if (error) {
            throw new Error('Error has occurred, no data has been retrieved!') ;
          }
        }
      );



  }
}
