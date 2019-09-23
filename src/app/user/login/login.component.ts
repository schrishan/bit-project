import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../index.services'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isUserActivate: boolean;

  constructor(private CommonService:CommonService) { }

  ngOnInit() {
    this.CommonService.castUserActivate.subscribe(isUserActivate => this.isUserActivate = isUserActivate);
  }

  loginUser(event) {
    event.preventDefault();
    this.isUserActivate = true;
    this.CommonService.userActivateState(this.isUserActivate);    
  }

}
