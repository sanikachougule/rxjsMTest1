import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-consumer3',
  templateUrl: './consumer3.component.html',
  styleUrls: ['./consumer3.component.scss']
})
export class Consumer3Component implements OnInit {
  userNameValue !: string;
  constructor(
    private _usersServices: UsersService
  ) { }

  ngOnInit(): void {
    this._usersServices.userSub$
    .subscribe(val => this.userNameValue = val)
  }

}
