import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsdataService } from '../productsdata.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],

})
export class InventoryComponent implements OnInit {
  products: Array<Product> = new Array<Product>();
  constructor(private pdataservice: ProductsdataService) {
  }

  ngOnInit(): void {
    this.products = this.pdataservice.getProductsList();
  }

  setNewPrice(newprice: number, pid: number) { // refactor and move it to productsdataservice
    for (var i = 0; i < this.products.length; ++i) {
      if (this.products[i].id == pid)
        this.products[i].price = newprice;
    }
  }
}
