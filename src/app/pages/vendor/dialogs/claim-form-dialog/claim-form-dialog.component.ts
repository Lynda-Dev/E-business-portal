import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CertificateDialogComponent } from '../certificate-dialog/certificate-dialog.component';

@Component({
  selector: 'app-claim-form-dialog',
  templateUrl: './claim-form-dialog.component.html',
  styleUrls: ['./claim-form-dialog.component.css']
})
export class ClaimFormDialogComponent implements OnInit {

  claimFormGroup: FormGroup;
  dialog: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ClaimFormDialogComponent>,

    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    //  claimFormGroup
    this.claimFormGroup = this.fb.group({
      customerName: [this.data.claim.customerName, [Validators.required]],
      emailAddress: [this.data.claim.emailAddress, [Validators.required]],
      phoneNumber: [this.data.claim.phoneNumber, [Validators.required]],
      contactAddress: [this.data.claim.contactAddress, [Validators.required]],
      engineNo: [this.data.claim.engineNo, [Validators.required]],
      chassisInfo: [this.data.claim.chassisInfo, [Validators.required]],
      registrationInfo: [this.data.claim.registrationInfo, [Validators.required]],
      yearOfMake: [this.data.claim.yearOfMake, [Validators.required]],
      vehicleModel: [this.data.claim.vehicleModel, [Validators.required]],
      sumInsured: [this.data.claim.sumInsured, [Validators.required]],
      premium: [this.data.claim.premium, [Validators.required]],
      coverDate: [this.data.claim.coverDate, [Validators.required]],
      expiryDate: [this.data.claim.expiryDate, [Validators.required]],
      typeOfCover: [this.data.claim.typeOfCover, [Validators.required]],
      transactionStatus: [this.data.claim.transactionStatus, [Validators.required]],
      
    
    });
  }  // oninit
}