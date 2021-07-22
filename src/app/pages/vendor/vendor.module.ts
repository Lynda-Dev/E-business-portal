import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularmaterialModule } from 'src/app/ui/materials/angularmaterial.module';
import { ClaimFormDialogComponent } from './dialogs/view-form-dialog/view-form-dialog.component';
import { CertificateDialogComponent } from './dialogs/certificate-dialog/certificate-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AngularmaterialModule
  ],
  declarations: [
    ClaimFormDialogComponent,
    CertificateDialogComponent
  ],
  entryComponents: [ClaimFormDialogComponent, CertificateDialogComponent],
  exports: [CertificateDialogComponent]
})
export class VendorModule { }
