import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsdataService } from '../productsdata.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
  // providers: [{ provide: ProductsdataService, useClass: ProductsdataService }]
  // providers: [ProductsdataService]
})

export class ProductlistComponent implements OnInit {
  productList: Array<Product> = new Array<Product>();
  isAdmin: boolean = true; // set by login service
  constructor(private pdataservice: ProductsdataService) {
    // let pdataservice = new ProductsdataService();
  }

  ngOnInit(): void {
    this.productList = this.pdataservice.getProductsList();
  }

  delete(pid: number) {
    // find the product by id and delete that product
    for (var i = 0; i < this.productList.length; ++i) {
      if (this.productList[i].id == pid)
        this.productList.splice(i, 1);
    }
  }

}
