import { Injectable } from '@angular/core';
import {TWITS} from './mock-twits';
import {Observable, of} from 'rxjs';
import {Twit} from './twit';

@Injectable({
  providedIn: 'root'
})
export class TwitService {

  constructor() { }
  getTwits(): Observable<Twit[]>{
    return of(TWITS);
  }
  getTwitsByUserId(userId: number): Observable<Twit[]>{
    return  of(TWITS.filter(twit => twit.user_id === userId));
  }
  getTwitById(userId: number): Observable<Twit>{
    return  of(TWITS.find(twit => twit.id === userId));
  }

  addTwit(twit: Twit): void{
    TWITS.push(twit);

  }
}
