import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../user';
import {UserService} from '../user.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void{
    const id = +this.route.snapshot.paramMap.get('user_id');
    this.userService.getUserById(id).subscribe(user => this.user = user);
  }

  goBack(): void{
    this.location.back();
  }

}
