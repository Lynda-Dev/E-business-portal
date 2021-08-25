import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import moment from 'moment';
import { CertificateDialogComponent } from '../certificate-dialog/certificate-dialog.component';

@Component({
  selector: 'app-claim-form-dialog',
  templateUrl: './view-form-dialog.component.html',
  styleUrls: ['./view-form-dialog.component.css']
})
export class ClaimFormDialogComponent implements OnInit {

  claimFormGroup: FormGroup;
  dialog: any;


  get filename (){
    return 'https://selfservice.zenithinsurance.com.ng/selfservice.zenithinsurance.com.ng/Uploads/' + this.claimFormGroup.get(['licenseFilePath']).value;
  }
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ClaimFormDialogComponent>,

    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    //  claimFormGroup
    const customerName = `${this.data.claim.firstName} ${this.data.claim.lastName}`;
    const duration = this.data.claim.duration;
    const createdDate = moment(new Date(this.data.claim.date)).format("YYYY-MM-DD");
    const expiryDate = moment(new Date(this.data.claim.date)).add(duration, 'months').format("YYYY-MM-DD");

    this.claimFormGroup = this.fb.group({
      customerName: [customerName, [Validators.required]],
      emailAddress: [this.data.claim.emailAddress, [Validators.required]],
      phoneNumber: [this.data.claim.phoneNumber, [Validators.required]],
      contactAddress: [this.data.claim.address, [Validators.required]],
      engineNo: [this.data.claim.engineNumber, [Validators.required]],
      chassisInfo: [this.data.claim.chassisInformation, [Validators.required]],
      registrationInfo: [this.data.claim.registrationNumber, [Validators.required]],
      yearOfmake: [this.data.claim.yearOfmake, [Validators.required]],
      vehicleModel: [this.data.claim.vehicleModel, [Validators.required]],
      sumInsured: [this.data.claim.insured, [Validators.required]],
      premium: [this.data.claim.amount, [Validators.required]],
      coverDate: [this.data.claim.coverDate, [Validators.required]],
      expiryDate: [expiryDate, [Validators.required]],
      transactionStatus: [this.data.claim.transactionStatus, [Validators.required]],
      policyNumber: [this.data.claim.customPolicyNumber, [Validators.required]],
      date: [createdDate, [Validators.required]],
      duration: [this.data.claim.duration, [Validators.required]],
      gateway: [this.data.claim.gateway, [Validators.required]],
      isProcessed: [this.data.claim.isProcessed, [Validators.required]],
      licenseFilePath: [this.data.claim.licenseFilePath, [Validators.required]],
      merch_txnref: [this.data.claim.merch_txnref, [Validators.required]],
      policyStatusId: [this.data.claim.policyStatusId, [Validators.required]],
      product: [this.data.claim.product, [Validators.required]],
      quoteId: [this.data.claim.quoteId, [Validators.required]],
      refNo: [this.data.claim.refNo, [Validators.required]],
      vehicleMake: [this.data.claim.vehicleMake, [Validators.required]]
    });
  }  // oninit
}

