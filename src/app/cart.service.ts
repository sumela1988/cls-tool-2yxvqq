import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { products } from '../products';

@Injectable({
   providedIn: 'root'
})
export class CartService {
  items = [];

  constructor(
    private http: HttpClient
  ){}


  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
  getTotalAmount(){
    return this.items.map( (items: products []) => {
      return items.reduce((prev, curr: products) => {
        return prev + curr.price;
      }, 0);
    });
  }
  removeFromCart(items: products){
    const currentItems = [...this.items];
    const itemsWithoutRemoved = currentItems.filter(_ => _.id !==items.id);
    this.items.next(itemsWithoutRemoved);
  }
}

