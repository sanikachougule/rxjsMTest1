import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-consumer1',
  templateUrl: './consumer1.component.html',
  styleUrls: ['./consumer1.component.scss']
})
export class Consumer1Component implements OnInit {
userNameValue !: string;
  constructor(
    private _usersServices: UsersService
  ) { }

  ngOnInit(): void {
    this._usersServices.userSub$
    .subscribe(val => this.userNameValue = val)
  }

}
