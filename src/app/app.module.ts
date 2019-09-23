import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import {ButtonModule} from 'primeng/button';
import {ScrollPanelModule} from 'primeng/scrollpanel';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NewUserComponent } from './user/new-user/new-user.component';

import { CommonElementsModule } from './common/common-elements.module'
import { routing } from './app.routing.module';

import { CommonService } from './index.services'
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routing,
    ButtonModule,
    ScrollPanelModule,
    CommonElementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
