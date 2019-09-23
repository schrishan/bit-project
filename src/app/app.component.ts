import { Component, OnInit } from '@angular/core';
import { CommonService } from './index.services'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  navBarHidden:boolean;
  mobileNavBarShow: boolean;
  constructor(private CommonService:CommonService) { }

  ngOnInit() {

    //update nav bar state for mobile & desktop
    this.CommonService.cast.subscribe(navBarHidden=> this.navBarHidden = navBarHidden);
    this.CommonService.mobileNavcast.subscribe(mobileNavBarShow=> this.mobileNavBarShow = mobileNavBarShow);
  }
}
