import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';
import {Product} from '../products';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit  {

  public shoppingCartItems$: Observable<Product[]> = of([]);
  public shoppingCartItems: Product[] = [];


  constructor(
    private cartService: CartService ) { 
    this.shoppingCartItems$ = this.cartService.getItems();

    this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);
  }

  ngOnInit() {
  }

  public getTotal(): Observable<number> {
    return this.cartService.getTotalAmount();
  }

  public removeItem(item: Product) {
    this.cartService.removeFromCart(item)
  }

}