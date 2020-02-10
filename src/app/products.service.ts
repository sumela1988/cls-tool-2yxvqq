import { Injectable } from '@angular/core';
import { Product } from '../products';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ProductsService {
  items =[];

  public getItems() {
    return this.items;
  }
}
