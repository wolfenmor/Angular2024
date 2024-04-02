import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {urls} from "../constants/urls";
import {IPost} from "../interfaces/post.interface";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }
  getAll():Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(urls.posts.base)
  }
}
