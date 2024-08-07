import { Injectable } from '@angular/core';
import { filter, map, Observable, tap } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class OfService {
  of$ = of(1,2,3,4,5,6,7,8,9,10)
     .pipe(
      filter((num: number)=>{
        return num % 2 === 0
      })
     )
     skills$= of("HTML","CSS","TS","NodeJs","Angular","RxJs") 
       .pipe(
        tap(skill =>{
          console.log( `Before MAP ${skill}`);
        }),
        map(skill =>{
          return `I Love ${skill}`
        }),
        tap(skill =>{
          console.log( `After MAP ${skill}`);
        })
       )

       //onservable ctm

       ourInterval$ = new Observable( (observer)=>{
        let count = 0;
      setInterval(()=>{
        observer.next(count);
        count++;
        if(count == 5){
          observer.complete()
        }
        if(count > 12){
          observer.error(`Devils Number`)
        }
      },1000)
      })

  constructor() { }
}
