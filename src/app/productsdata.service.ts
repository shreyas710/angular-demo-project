import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsdataService {
  productList: Array<Product>;
  constructor() {
    console.log("Products data service invoked");
    this.productList = new Array<Product>();
  }

  getProductsList() {
    return this.productList;
  }
}
