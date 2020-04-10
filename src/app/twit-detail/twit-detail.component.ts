import { Component, OnInit } from '@angular/core';
import {Twit} from '../twit';
import {ActivatedRoute} from '@angular/router';
import {TwitService} from '../twit.service';
import {Location} from '@angular/common';
import {TWITS} from '../mock-twits';

@Component({
  selector: 'app-twit-detail',
  templateUrl: './twit-detail.component.html',
  styleUrls: ['./twit-detail.component.css']
})
export class TwitDetailComponent implements OnInit {
  twit: Twit;
  authorName: string;

  constructor(
    private route: ActivatedRoute,
    private twitService: TwitService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTwit();
  }

  getTwit(): void{
    const id = +this.route.snapshot.paramMap.get('twit_id');
    this.twitService.getTwitById(id).subscribe(twit => this.twit = twit);
  }
  goBack(): void{
    this.location.back();
  }
  like(): void{
    this.twit.like_count++;
  }
  delete(): void{
    TWITS.splice(TWITS.indexOf(this.twit), 1);
    window.location.href = '/users';
  }

}
