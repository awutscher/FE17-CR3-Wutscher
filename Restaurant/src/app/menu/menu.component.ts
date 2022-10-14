import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { products } from "../products"
import { Iproducts } from "../Iproducts"
import { CartService } from '../cart.service';


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
    private cartService: CartService 
  ) { }

  addtoCart(product:Iproducts) {
    this.cartService.addtoCart(product);
  }
  
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
    this.id = +params['productId'];
    this.product = products[this.id];
  });}
  }


