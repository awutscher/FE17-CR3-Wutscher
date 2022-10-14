import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';
import { Iproducts } from '../Iproducts';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

product:Iproducts = {} as Iproducts;
id:number = 0;

constructor(
  private route: ActivatedRoute,
  private cartService: CartService
) { }

addtoCart(product:Iproducts) {
  this.cartService.addtoCart(this.product);
}

ngOnInit(): void {
  this.route.params.subscribe((params: Params) => {
  this.id = +params['productId'];
  this.product = products[this.id];
});
}}