import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Post } from "../models/post-model";
import { environment } from "environments/environments";
import { Product } from "src/app/shop/models/product.model";

@Injectable()
export class PostService {
    constructor (private http : HttpClient){}

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(`${environment.apiUrl}/posts`);
    } 
    newComment( postCommented : { comment : string, postId : number } ){
        console.log(postCommented)
    }
}

    