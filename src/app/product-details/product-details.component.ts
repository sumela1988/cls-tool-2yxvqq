import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../products';
import {ProductsService} from '../products.service';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public product: Product = {};
  
 constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.productsService
        .getProduct(id)
        .subscribe(_ => this.product = _)
    });
  }
  public addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.router.navigateByUrl('/');
  }

}