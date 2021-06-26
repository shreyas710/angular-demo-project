import { ProductsdataService } from './productsdata.service';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class AmazondataService extends ProductsdataService {
  productList: Array<Product> = new Array<Product>();
  constructor() {
    super();
    console.log('AmazonDataService Invoked');

    let p1 = new Product(1, "Angular CookBook", "Techincal", 240, "assets/images/angular.jpg");
    let p2 = new Product(2, "Ajax for Dummies", "Techincal", 640, "assets/images/ajax.jpg");
    let p3 = new Product(3, "Life Rules", "Self Help", 540, "assets/images/liferules.jpg");
    let p4 = new Product(4, "Tinkle", "Comic", 140, "assets/images/tinkle.jpg");
    let p5 = new Product(5, "You Can Win", "Self Help", 440, "assets/images/youcanwin.jpg");
    this.productList.push(p1);
    this.productList.push(p2);
    this.productList.push(p3);
    this.productList.push(p4);
    this.productList.push(p5);
  }

  getProductsList(): Array<Product> {
    return this.productList;
  }
}
