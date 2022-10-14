import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { products } from "../products"
import { Iproducts } from "../Iproducts"
import { CartService } from '../cart.service';//comment out


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  products:Iproducts[] = products;

  product:Iproducts = {} as Iproducts;
  id:number = 0;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService //comment out
  ) { }

  addtoCart(product:Iproducts) {//comment out
    window.alert('Your product has been added to the cart!');
    this.cartService.addtoCart(product);
    console.log(product)
  }
  
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
    this.id = +params['productId'];
    this.product = products[this.id];
  });}
  }


