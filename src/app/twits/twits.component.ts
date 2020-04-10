import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TwitService} from '../twit.service';
import {Twit} from '../twit';
import {Location} from '@angular/common';
import {FormBuilder} from '@angular/forms';
import {TWITS} from '../mock-twits';
import {UserService} from '../user.service';
import {User} from '../user';

@Component({
  selector: 'app-twits',
  templateUrl: './twits.component.html',
  styleUrls: ['./twits.component.css']
})
export class TwitsComponent implements OnInit {
  createTwitForm;

  constructor(
    private route: ActivatedRoute,
    private twitService: TwitService,
    private userService: UserService,
    private location: Location,
    private formBuilder: FormBuilder,
  ) {
    this.createTwitForm = this.formBuilder.group({
      title: '',
      text: '',
      user_id: null
    });
  }

  // newTwit: Twit = {
  //   id: 0,
  //   title: '',
  //   text: '',
  //   date: new Date(Date.now()),
  //   like_count: 0,
  //   user_id: 0
  // };
  twits: Twit[];
  user: User;

  ngOnInit(): void {
    const userId = +this.route.snapshot.paramMap.get('user_id');
    if (userId === 0) {
      this.getTwits();
      this.user = null;
    } else {
      this.userService.getUserById(userId).subscribe(user => this.user = user);
      this.getTwitsByUserId();
    }
  }

  getTwits(): void {
    this.twitService.getTwits()
      .subscribe(twits => this.twits = twits);
  }

  getTwitsByUserId() {
    const userId = +this.route.snapshot.paramMap.get('user_id');
    this.twitService.getTwitsByUserId(userId).subscribe(twits => this.twits = twits);
  }

  onAdd(twitData) {
    this.createTwitForm.reset();
    // if (twitData.!== null){
    // twit: Twit {id}
    const newTwit: Twit = {
      id: TWITS.length + 1,
      title: twitData.title,
      text: twitData.text,
      date: new Date(Date.now()),
      like_count: twitData.like_count,
      user_id: +this.route.snapshot.paramMap.get('user_id')
    };
    this.twitService.addTwit(newTwit);
    this.user.last_twit_date = new Date(Date.now());
    console.warn('Your twit has been submitted', twitData.title, newTwit.user_id);
    this.getTwitsByUserId();
  }

  goBack(): void {
    this.location.back();
  }

}
