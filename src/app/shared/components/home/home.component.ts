import { Component, OnInit } from '@angular/core';
import { OfService } from '../../services/of.service';
import { PostsService } from '../../services/posts.service';
import { Iposts } from '../../models/post.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 postsData !:any;
  constructor(
    private _ofServices: OfService,
    private _postsServices: PostsService
  ) { }

  ngOnInit(): void {
    this._ofServices.ourInterval$
     .subscribe((num)=>{console.log(num);},
      (err)=>{console.log(err)},
      ()=>{console.log(`Observable is Completed`)}
  )

  this._postsServices.fetchAllPosts()
  .subscribe(res =>{
    console.log(res);
    this.postsData = res
    
  }
  
  )
  }

}
