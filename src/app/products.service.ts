import { Injectable } from '@angular/core';
import { Product } from '../products';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {
  items =[];

  public getItems() {
    return this.items;
  }
}
