import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewUserComponent } from './new-user/new-user.component';

const userRoutes: Routes = [
  { path: 'user/new-user',  component: NewUserComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }