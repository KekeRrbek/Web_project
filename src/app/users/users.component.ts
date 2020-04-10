import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import {USERS} from '../mock-users';
import {User} from '../user';
import {UserService} from '../user.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(private userService: UserService, private location: Location) { }

  users: User[];

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }
  goBack(): void{
    this.location.back();
  }


}
