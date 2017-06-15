import { Component, OnInit, Input } from '@angular/core';
import {User} from "../todo.model";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  _users: User[] = [];
  @Input()

  set users(users:User[]){
    this._users = [...users];
  }

  get users(){
    return this._users;
  }
  constructor() { }

  ngOnInit() {
  }

}
