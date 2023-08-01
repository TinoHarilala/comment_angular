import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import ProductService from '../../services/product.services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
    products$ !: Observable<Product[]>
    
    constructor(private productService : ProductService) {}

    ngOnInit(): void {
      this.products$ = this.productService.getAllProduct()
    }
}
