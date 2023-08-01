import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/shop/models/product.model';

@Component({
  selector: 'app-pannier-item',
  templateUrl: './pannier-item.component.html',
  styleUrls: ['./pannier-item.component.scss']
})
export class PannierItemComponent implements OnInit {
  @Input()
    productItem !: Product

    @Output() productToRemove = new EventEmitter<Product>()    

  ngOnInit(): void {
  }

  removeItem(){
    this.productToRemove.emit(this.productItem);
  }
}
