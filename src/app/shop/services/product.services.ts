import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/product.model";

@Injectable()
export default class ProductService {
    constructor (private http : HttpClient){}

    getAllProduct() : Observable<Product[]> {
        return this.http.get<Product[]>('http://localhost:3000/products')
    }
}