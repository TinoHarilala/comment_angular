import { Component, Input } from '@angular/core';
import { PannierService } from 'src/app/core/services/pannier.services';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent {
  @Input()
    product !: Product

  constructor(private pannierService : PannierService){}

  addToBasket(){
    this.pannierService.addProduct(this.product)
  }  
}
