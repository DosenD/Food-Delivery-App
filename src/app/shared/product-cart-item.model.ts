export interface ProductGroup {
 name:string,
 imagePath:string,
 description: string,
}


export interface Product {
 name: string,
 imagePath:string, 
 description: string, 
 price: number,
 type: 'chicken' | 'pork',
}


export class CartItem {

 constructor(
  public product: Product,
  public quantity: number, 
  public toppings: string[], 
  public salads: string[],
 ){}

 get sum(){
  return this.product.price * this.quantity
 }
}


/*export interface OrderItem  {
 items: CartItem[],
 delivery: Delivery,
 firstName: string,
 lastName: string,
 streetName: string,
 houseOrBuildNum: string,
 appNum: number,
}*/
