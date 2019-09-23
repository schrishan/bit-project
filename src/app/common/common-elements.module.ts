import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NavBarComponent, BreadcrumbComponent],
  exports:[NavBarComponent, BreadcrumbComponent]
})
export class CommonElementsModule { }
