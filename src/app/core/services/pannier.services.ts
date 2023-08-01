import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Product } from "src/app/shop/models/product.model";

@Injectable()
export class PannierService {
   private produit$  : BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

    addProduct(prod : Product) {
       const currentValue = this.produit$.getValue()
       const updateValue = [...currentValue, prod]

        this.produit$.next(updateValue)
    }

    getListProduit() : Observable<Product[]> {
        return this.produit$.asObservable() 
    }

    removeProduct (prod : Product) {
        const currentValue = this.produit$.getValue()
        const updateValue = currentValue.filter( p => p.id !== prod.id )

        this.produit$.next(updateValue)
    }
}