import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {TwitsComponent} from './twits/twits.component';
import {TwitDetailComponent} from './twit-detail/twit-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full'},
  { path: 'users', component: UsersComponent },
  { path: 'users/:user_id', component: UserDetailComponent },
  { path: 'users/:user_id/twits', component: TwitsComponent },
  {path: 'twits', component: TwitsComponent},
  { path: 'twits/:twit_id', component: TwitDetailComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
