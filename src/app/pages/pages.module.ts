import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { VendorModule } from './vendor/vendor.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { VendorComponent } from './vendor/vendor.component';
import { LandingComponent } from './landing/landing.component';
import { LandingModule } from './landing/landing.module';
import { AdminComponent } from './admin/admin.component';
import { NavComponent } from '../ui/nav/nav.component';
import { AdminModule } from './admin/admin.module';
import { UwModule } from './uw/uw.module';
import { UwComponent } from './uw/uw.component';
import { ServicesModule } from '../services/services.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    VendorModule,
    LandingModule,
    AdminModule,
    UwModule,
    ServicesModule,
  ],
  declarations: [NotfoundComponent,
    VendorComponent,
    LandingComponent,
    AdminComponent,
    NavComponent,
    UwComponent,
  ],
  exports: []
})
export class PagesModule { }
