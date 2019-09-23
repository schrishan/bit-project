import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private navBarHidden = new BehaviorSubject<boolean>(false);
  private mobileNavBarShow = new BehaviorSubject<boolean>(false);
  private isUserActivate = new BehaviorSubject<boolean>(false);

  cast = this.navBarHidden.asObservable();
  castMobileNav = this.mobileNavBarShow.asObservable();
  castUserActivate = this.isUserActivate.asObservable();
  

  constructor() { }

  //update nav bar toggle state
  navBarState(navBarStateValue){
    this.navBarHidden.next(navBarStateValue);
  }

   //update mobile nav bar toggle state
  mobileNavBarState(mobileNavBarShow){
    this.mobileNavBarShow.next(mobileNavBarShow);
  }

  //update user login state
  userActivateState(isUserActivate){
    this.isUserActivate.next(isUserActivate);
  }


}
