import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './new-user/new-user.component'
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [NewUserComponent, LoginComponent]
})
export class UserModule { }
