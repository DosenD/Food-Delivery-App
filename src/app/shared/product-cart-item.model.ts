export interface ProductGroup {
 name:string,
 imagePathMed:string,
 imagePathSmall?:string,
 description: string,
 linkToGroup?: string,
 type:string,
}


export interface Product {
 name: string,
 imagePathMed:string, 
 imagePathSmall:string, 
 description: string, 
 price: number,
 type:string,
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
