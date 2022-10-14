import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { products } from '../products';
/* import { CartService } from '../cart/cartservice.service'; */
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
  /* private cartService: CartService */
) { }

/* addtoCart() {
  window.alert('Your product has been added to the cart!');
  this.cartService.addtoCart(this.product);
} */

ngOnInit(): void {
  this.route.params.subscribe((params: Params) => {
  this.id = +params['productId'];
  this.product = products[this.id];
});
}}