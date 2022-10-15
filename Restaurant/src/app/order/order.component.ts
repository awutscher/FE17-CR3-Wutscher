
import { NgIfContext } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Iproducts } from '../Iproducts';
import { products } from '../products';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})

export class OrderComponent implements OnInit {

items: Iproducts[] = [];
constructor(private cartService: CartService
  ) { }


get totalSum(){
  let totalSum = this.items.reduce((prev , next) => prev + next.price*next.amount,0)
  return totalSum + totalSum*.10;
}

get serviceFee(){
  return this.totalSum*0.10;
}

discount = 0;

get discountCalc(){
  if(this.totalSum > 40){
    this.discount = this.totalSum * 0.15;
    return this.discount;
  }
  else{
    return this.discount = 0;
  }
};

get endPrice(){
  return this.totalSum - this.discount;
}


get totalAmountItems(){
  return this.items.reduce((prev , next) => prev + next.amount,0)
}

ngOnInit(): void {
  this.items = this.cartService.getItems();
  console.log(this.items)
}
}
