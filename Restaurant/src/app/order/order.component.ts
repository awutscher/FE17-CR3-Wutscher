
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
    return this.items.reduce((prev , next) => prev + next.price,0)
  }

  get totalAmountItems(){//BUGGY AS FUCK
    return this.items.reduce((prev , next) => prev + next.amount,0)
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    console.log(this.items)
  }
}
