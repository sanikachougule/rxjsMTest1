import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { OfService } from '../../services/of.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit,OnDestroy {
   interval$ = interval(1000);
   intervalSubscription !: Subscription
  constructor(
    
  ) { }
 
 ngOnInit(): void {
    this.intervalSubscription = this.interval$
    .subscribe(res =>{
      console.log(res)
       })
   
  }
  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe()
  }

}
