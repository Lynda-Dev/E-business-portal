import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './landing/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UwComponent } from './uw/uw.component';
import { LoginGuard } from '../guards/login.guard';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'prefix'
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },

  {
    path: 'admin',
    component: AdminComponent,
    canActivateChild:[LoginGuard],
    children: [

      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'prefix',

      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      }
    ]
  },

  {
    path: 'uw',
    component: UwComponent,
    children: [
      {
        path: '',
        redirectTo: 'policies',
        pathMatch: 'prefix'
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
