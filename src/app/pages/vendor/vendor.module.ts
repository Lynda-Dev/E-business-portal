import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicyComponent } from './policy/policy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularmaterialModule } from 'src/app/ui/materials/angularmaterial.module';
import { PolicyFormComponent } from './policy-form/policy-form.component';
import { ClaimFormDialogComponent } from './dialogs/claim-form-dialog/claim-form-dialog.component';
import { ClaimComponent } from './claim/claim.component';
import { VendorSettingsComponent } from './vendor-settings/vendor-settings.component';
import { ReportComponent } from './report/report.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CertificateDialogComponent } from './dialogs/certificate-dialog/certificate-dialog.component';
import { CancelPolicyDialogComponent } from './dialogs/cancel-policy-dialog/cancel-policy-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AngularmaterialModule
  ],
  declarations: [PolicyComponent,
    PolicyFormComponent,
    ClaimFormDialogComponent,
    ClaimComponent,
    VendorSettingsComponent,
    ReportComponent,
    DashboardComponent,
    CertificateDialogComponent,
    CancelPolicyDialogComponent
  ],
  entryComponents: [ClaimFormDialogComponent, CertificateDialogComponent, CancelPolicyDialogComponent],
  exports: [CertificateDialogComponent]
})
export class VendorModule { }
