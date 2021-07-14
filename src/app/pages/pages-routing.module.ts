import { AdminCoversComponent } from './admin/admin-covers/admin-covers.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorComponent } from './vendor/vendor.component';
import { DashboardComponent } from './vendor/dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './landing/login/login.component';
import { RegisterComponent } from './landing/register/register.component';
import { ForgotpasswordComponent } from './landing/forgotpassword/forgotpassword.component';
import { PolicyComponent } from './vendor/policy/policy.component';
import { PolicyFormComponent } from './vendor/policy-form/policy-form.component';
import { ClaimComponent } from './vendor/claim/claim.component';
import { VendorSettingsComponent } from './vendor/vendor-settings/vendor-settings.component';
import { ReportComponent } from './vendor/report/report.component';
import { VendorsComponent } from './admin/vendors/vendors.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AddVendorComponent } from './admin/add-vendor/add-vendor.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminRolesComponent } from './admin/admin-roles/admin-roles.component';
import { UwComponent } from './uw/uw.component';

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
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: {
          heading: 'passwordis'
        }
      },
      {
        path: 'forgotpassword',
        component: ForgotpasswordComponent,
        data: {
          heading: 'passwordis'
        }
      }
    ]
  },

  {
    path: 'vendor',
    component: VendorComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'prefix'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'policy',
        component: PolicyComponent,
        data: {
          heading: 'policy'
        }
      },
      {
        path: 'policyform',
        component: PolicyFormComponent,
      },
      {
        path: 'claim',
        component: ClaimComponent,
      },
      {
        path: 'settings',
        component: VendorSettingsComponent,
      },
      {
        path: 'report',
        component: ReportComponent,
      }
    ]
  },

  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'prefix'
      },
      {
        path: 'dashboard',
        component: AdminDashboardComponent,
      },
      {
        path: 'vendors',
        component: VendorsComponent,
      },
      {
        path: 'addvendors',
        component: AddVendorComponent,
      },
      {
        path: 'policies',
        component: PolicyComponent,
      },
      {
        path: 'claim',
        component: ClaimComponent,
      },
      {
        path: 'covers',
        component: AdminCoversComponent,
      },
      {
        path: 'users',
        component: AdminUsersComponent,
      },
      {
        path: 'roles',
        component: AdminRolesComponent,
      },
      {
        path: 'report',
        component: ReportComponent,
      },
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
      },
      {
        path: 'policies',
        component: PolicyComponent,
      },
      {
        path: 'claims',
        component: ClaimComponent,
      },
      {
        path: 'report',
        component: ReportComponent,
      },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
