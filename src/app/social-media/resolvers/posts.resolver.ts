import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Post } from "../models/post-model";
import { PostService } from "../services/post.service";

@Injectable()
export class PostsResolver implements Resolve<Post[]>{
    constructor( private postService : PostService ){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Post[] | Observable<Post[]> | Promise<Post[]> {
        return this.postService.getPosts()
    }   
}