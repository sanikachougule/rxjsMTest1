import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 // userSub$: Subject<string> = new Subject<string>()
 userSub$: BehaviorSubject<string> = new BehaviorSubject<string>('I am Jhon Doe');
  constructor() { }
}
