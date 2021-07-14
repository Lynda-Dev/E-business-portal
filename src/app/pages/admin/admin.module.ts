import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VendorsComponent } from './vendors/vendors.component';
import { AngularmaterialModule } from 'src/app/ui/materials/angularmaterial.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { AdminCoversComponent } from './admin-covers/admin-covers.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminRolesComponent } from './admin-roles/admin-roles.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AngularmaterialModule
  ],
  declarations: [
    VendorsComponent,
    AdminDashboardComponent,
    AddVendorComponent,
    AdminCoversComponent,
    AdminUsersComponent,
    AdminRolesComponent
  ]
})
export class AdminModule { }
