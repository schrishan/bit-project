import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './new-user/new-user.component'
import { UserRoutingModule } from './user-routing.module';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [NewUserComponent]
})
export class UserModule { }
