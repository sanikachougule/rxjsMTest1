import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iposts } from '../models/post.interface';
//import { Iposts } from '../models/post.interface';
//import {  BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postsUrl:string = (`${environment.baseUrl}/posts`)
 // post$ = of(this.postsUrl)
  constructor(
    private http: HttpClient,
    private _router:Router
  ) { }

  fetchAllPosts():Observable<Iposts[]>{
    return this.http.get<Iposts[]>(this.postsUrl);
    this._router.navigate(['/home']);
  }
}
