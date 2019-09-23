import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';;
import { NewUserComponent } from './user/new-user/new-user.component';
import { LoginComponent } from './user/login/login.component';

const appRoutes: Routes = [
      {
        path: 'user/login',
        component: LoginComponent
      },
      {
        path: 'user/new-user',
        component: NewUserComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
      ,
      {
        path: '',
        component: DashboardComponent
      },
];
export const routing = RouterModule.forRoot(appRoutes);
