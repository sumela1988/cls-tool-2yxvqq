import { Component } from '@angular/core';

import { Product } from '../products';
import {ProductsService} from '../products.service';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public items: Product[] = [];

  constructor (private productsServices: ProductsService,
  private cartService: CartService) {
    productsServices.getProducts().subscribe(_=>this.items = _);

    this.cartService.getItems().subscribe((items: Product[])=> {
      //remove itesm that are in our cartService
      const allItems = this.items;
      this.items = allItems.filter(_ =>{
        return !this.itemIsInCart(_, items);
      })
    })
  }

 ngOnInit() {
  }

  private itemIsInCart(item: Product, cart: Product[]): boolean {
    return cart.find(_ => _.id === item.id) != null;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
