import { Injectable } from '@angular/core';
import { Iproducts } from './Iproducts';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items:Iproducts[]=[];

  constructor() { }

/*   addtoCart(product:Iproducts){
    this.items.push(product);
    product.amount++;
    console.log(product)
  } */

//test 
addtoCart(product:Iproducts){
  if(this.items.includes(product)){
    product.amount++;
  }
  else{
    this.items.push(product)
    product.amount++;
  }
}

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }
}
