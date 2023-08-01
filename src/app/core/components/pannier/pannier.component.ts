import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shop/models/product.model';
import { PannierService } from '../../services/pannier.services';

@Component({
  selector: 'app-pannier',
  templateUrl: './pannier.component.html',
  styleUrls: ['./pannier.component.scss']
})
export class PannierComponent implements OnInit{

  product$ !: Observable<Product[]>

  constructor(private pannierService : PannierService){}

  ngOnInit(): void {
      this.product$ = this.pannierService.getListProduit()
  }

  onProductToRemove(prod : Product) {
    this.pannierService.removeProduct(prod)
  }
}
