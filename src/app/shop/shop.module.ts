import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';
import { MatCardModule } from '@angular/material/card';
import ShopRoutingModule from './shop.routing.module';
import ProductService from './services/product.services';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductListItemComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ShopRoutingModule
  ],
  providers : [
    ProductService
  ]
})
export class ShopModule { }
