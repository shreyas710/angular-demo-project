import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-priceupdater',
  templateUrl: './priceupdater.component.html',
  styleUrls: ['./priceupdater.component.css']
})
export class PriceupdaterComponent implements OnInit {
  @Input()
  pricevalue: number = 0; // to be set by parent - Inventory component

  // custom event
  @Output()
  update = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  updatePrice() {
    // emit custom event to parent - Inventory component - along with pricevalue
    this.update.emit(this.pricevalue);
  }

}
