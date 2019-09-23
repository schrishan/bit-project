import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../index.services'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  navData = [{
    level1Path: 'dashboard',
    level1Name: 'Dashboard',
    level1IconName: 'dashboard'
  },{
    level1Name: "Settings",
    level1IconName: 'settings_applications',
    level2: [{
      level2Path: "user/new-user",
      level2Name: "Add new user"
    }, {
      level2Path: "RS",
      level2Name: "Advanced Components"
    }, {
      level2Path: "RS",
      level2Name: "Form Validation"
    }, {
      level2Path: "RS",
      level2Name: "Form Wizard"
    }, {
      level2Path: "RS",
      level2Name: "Form Upload"
    }, {
      level2Path: "RS",
      level2Name: "Form Buttons"
    }]
  },{
    level1Path: "ui",
    level1Name: "UI Elements"
  },{
    level1Path: "tables",
    level1Name: "Tables"
  },{
    level1Path: "datap",
    level1Name: "Data Presentation"
  },{
    level1Path: "layouts",
    level1Name: "Layouts"
  }];

  navBarHidden: boolean;
  mobileNavBarShow: boolean;

  constructor(private CommonService:CommonService) { }

  ngOnInit() {

    // set active class to current open level 1 and sub menu items
    setTimeout(function(){
    if(document.querySelector(".par-menu-itm-click").classList.contains('active')){
      document.querySelector(".par-menu-itm-click.active").closest(".par-menu-itm-wrp").classList.add('active');
    }
    if(document.querySelector(".child-menu-itm").classList.contains('active')){
      document.querySelector(".child-menu-itm.active").closest(".par-menu-itm-wrp").classList.add('active');
      document.querySelector(".child-menu-itm.active").closest(".child-menu-itm-wrp").classList.add('active');
    }
    },0);
    this.CommonService.cast.subscribe(navBarHidden => this.navBarHidden = navBarHidden);
  }

  // toogle navigation bar 
  navBarToggle(){
      this.navBarHidden = !this.navBarHidden;       
      this.CommonService.navBarState(this.navBarHidden);
  }
  // toogle navigation bar for mobile view
  navBarToggleMobile(){
      this.mobileNavBarShow = !this.mobileNavBarShow;   
      this.CommonService.mobileNavBarState(this.mobileNavBarShow);    
  }
  
  //add active class to current level 1 menu item
  menuClick($event){
    let clickedItm = $event.srcElement;
    let menuItm = document.getElementsByClassName('par-menu-itm');
      for(var i=0; i< menuItm.length; i++)
        menuItm[i].parentElement.classList.remove('active');
      clickedItm.parentElement.classList.add('active');

      // remove active class from sub menu item when click level 1 menu item
      let subMenuItm = document.getElementsByClassName('child-menu-itm'); 
      for(var i=0; i< subMenuItm.length; i++) 
        subMenuItm[i].parentElement.classList.remove('active');
  }

  //add active class to current sub menu item
  subMenuClick($event){
    let subClickedItm = $event.srcElement;
    let menuItm = document.getElementsByClassName('child-menu-itm');
      for(var i=0; i< menuItm.length; i++)
        menuItm[i].parentElement.classList.remove('active');
      subClickedItm.parentElement.classList.add('active');

  }
}
