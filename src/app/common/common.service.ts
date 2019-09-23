import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private navBarHidden = new BehaviorSubject<boolean>(false);
  private mobileNavBarShow = new BehaviorSubject<boolean>(false);
  cast = this.navBarHidden.asObservable();
  mobileNavcast = this.mobileNavBarShow.asObservable();
  

  constructor() { }

  //update nav bar toggle state
  navBarState(navBarStateValue){
    this.navBarHidden.next(navBarStateValue);
  }

   //update mobile nav bar toggle state
  mobileNavBarState(mobileNavBarShow){
    this.mobileNavBarShow.next(mobileNavBarShow);
  }
}
