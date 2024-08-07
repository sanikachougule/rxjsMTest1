import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-consumer2',
  templateUrl: './consumer2.component.html',
  styleUrls: ['./consumer2.component.scss']
})
export class Consumer2Component implements OnInit {
  userNameValue !: string;
  constructor(
    private _usersServices: UsersService
  ) { }

  ngOnInit(): void {
    this._usersServices.userSub$
    .subscribe(val => this.userNameValue = val)
  }

}
