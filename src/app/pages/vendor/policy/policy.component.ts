import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, Validators, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ClaimFormDialogComponent } from '../dialogs/claim-form-dialog/claim-form-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CertificateDialogComponent } from '../dialogs/certificate-dialog/certificate-dialog.component';

import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { CancelPolicyDialogComponent } from '../dialogs/cancel-policy-dialog/cancel-policy-dialog.component';


@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('400ms cubic-bezier(0.9, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class PolicyComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog
  ) { }

  dataSource = new MatTableDataSource(PRODUCT_DATA);
  // columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  columnsToDisplay = ['sn', 'name', 'policy number', 'serial number', 'value', 'premium'];
  expandedElement: IproductList | null;

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  policyActive(status: string): boolean {

    status = status.trim();
    // console.log('This is active' + status);
    if (status === 'active') {
      return true;
    }
    return false;
  }

  // Open Dialog
  public openClaimDialog(claim) {
    const dialogRef = this.dialog.open(ClaimFormDialogComponent, {
      data: {
        claim: claim,
      },
      height: '1920px',
      width: '8010px',
    });

    // Whwn Dialog Closes
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  // Open Dialog
  public openCertificateDialog(claim) {
    const dialogRef = this.dialog.open(CertificateDialogComponent, {
      data: {
        claim: claim,
      },
      height: '920px',
      width: '800px',
    });

    // Whwn Dialog Closes
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  // Open Dialog
  public openCancelDialog(policy) {
    const dialogRef = this.dialog.open(CancelPolicyDialogComponent, {
      data: {
        policy: policy,
      },
      height: '250px',
      width: '300px',
    });

    // Whwn Dialog Closes
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public chosenMonthHandler(normalizedMonth, datepicker) {
    console.log(normalizedMonth);
    console.log('sp');
    console.log(datepicker);
    datepicker.close();
  }

  /** Gets the total getTotalValue of all transactions. */
  getTotalValue() {
    return PRODUCT_DATA.map(t => t.value).reduce((acc, value) => acc + value, 0);
  }

  /** Gets the total getTotalValue of all transactions. */
  getTotalInsurance() {
    return PRODUCT_DATA.map(t => t.insurance).reduce((acc, value) => acc + value, 0);
  }

  /** Gets the total getTotalValue of all transactions. */
  getTotalPremium() {
    return PRODUCT_DATA.map(t => t.premium).reduce((acc, value) => acc + value, 0);
  }

  /** Gets the total getTotalValue of all transactions. */
  getItem() {
    return PRODUCT_DATA.length;
  }

}
// PolicyComponent

// Interfaces
export interface IproductList {
  sn: number;
  name: string;
  'policy number': string;
  product: string;
  phone: string;
  startDate: string;
  endDate: string;
  'serial number': string;
  value: number;
  store: string;
  insurance: number;
  premium: number;
  dispatchCode: string;
  description: string;
  status: string;
}

const PRODUCT_DATA: IproductList[] = [
  {
    sn: 1,
    name: 'DR. SAHEED JUMAH',
    'policy number': 'ZG/F/1003/030601/00001',
    product: 'LGTV50UK63000PVB',
    phone: '08036471524',
    startDate: '02/30/2019',
    endDate: '02/30/2019',
    'serial number': '904FNTX0C266',
    value: 1630000,
    store: 'STRAC',
    insurance: 9624,
    premium: 2624,
    dispatchCode: 'SDHSTRAC00006555',
    description: 'LGTV 50 UK 63000PVB sold in our store to a customer that paid us because we love money, yes we love money!',
    status: 'active'
  },
  {
    sn: 2,
    name: ' MARK JUMAH',
    'policy number': 'ZG/F/1003/030601/00001',
    product: 'LGTV50UK63000PVB',
    phone: '08036471524',
    startDate: '02/30/2019',
    endDate: '02/30/2019',
    'serial number': '904FNTX0C266',
    value: 1630000,
    store: 'STRAC',
    insurance: 9624,
    premium: 2624,
    dispatchCode: 'SDHSTRAC00006555',
    description: 'LGTV 50 UK 63000PVB sold in our store to a customer that paid us a lot of money that we wont share bec money, ney!',
    status: 'active'
  },
  {
    sn: 3,
    name: 'BEN. SHAW  ',
    'policy number': 'ZG/F/1003/030601/00001',
    product: 'LGTV50UK63000PVB',
    phone: '08036471524',
    startDate: '02/30/2019',
    endDate: '02/30/2019',
    'serial number': '904FNTX0C266',
    value: 1630000,
    store: 'STRAC',
    insurance: 9624,
    premium: 2624,
    dispatchCode: 'SDHSTRAC00006555',
    description: 'LGTV 50 UK 63000PVB sold in our store to a customer that paid us a lot of money  are bec y!',
    status: 'pending'
  },
  {
    sn: 4,
    name: 'VICTOR. LAUREL  ',
    'policy number': 'ZG/F/1003/030601/00001',
    product: 'LGTV50UK63000PVB',
    phone: '08036471524',
    startDate: '02/30/2019',
    endDate: '02/30/2019',
    'serial number': '904FNTX0C266',
    value: 1630000,
    store: 'STRAC',
    insurance: 9624,
    premium: 2624,
    dispatchCode: 'SDHSTRAC00006555',
    description: 'LGTV 50 UK 63000PVB sold in our store to a customer that paid us a lot of money  , yes we love money!',
    status: 'pending'
  },
  {
    sn: 5,
    name: 'VICTOR. LAUREL  ',
    'policy number': 'ZG/F/1003/030601/00001',
    product: 'LGTV50UK63000PVB',
    phone: '08036471524',
    startDate: '02/30/2019',
    endDate: '02/30/2019',
    'serial number': '904FNTX0C266',
    value: 1630000,
    store: 'STRAC',
    insurance: 9624,
    premium: 2624,
    dispatchCode: 'SDHSTRAC00006555',
    description: 'LGTV 50 UK 63000PVB sold in our store to a customer that paid us a lot of ney, yes we love money!',
    status: 'pending'
  },
  {
    sn: 6,
    name: 'VICTOR. LAUREL  ',
    'policy number': 'ZG/F/1003/030601/00001',
    product: 'LGTV50UK63000PVB',
    phone: '08036471524',
    startDate: '02/30/2019',
    endDate: '02/30/2019',
    'serial number': '904FNTX0C266',
    value: 1630000,
    store: 'STRAC',
    insurance: 9624,
    premium: 2624,
    dispatchCode: 'SDHSTRAC00006555',
    description: 'LGTV 50 UK 63000PVB sold in our store to a customer that paid us a lot of money love ve money!',
    status: 'pending'
  },
  {
    sn: 7,
    name: 'VICTOR. LAUREL  ',
    'policy number': 'ZG/F/1003/030601/00001',
    product: 'LGTV50UK63000PVB',
    phone: '08036471524',
    startDate: '02/30/2019',
    endDate: '02/30/2019',
    'serial number': '904FNTX0C266',
    value: 1630000,
    store: 'STRAC',
    insurance: 9624,
    premium: 2624,
    dispatchCode: 'SDHSTRAC00006555',
    description: 'LGTV 50 UK 63000PVB sold in our store to a customer that paid us a l ey, yes we love money!',
    status: 'pending'
  },
  {
    sn: 8,
    name: 'VICTOR. LAUREL  ',
    'policy number': 'ZG/F/1003/030601/00001',
    product: 'LGTV50UK63000PVB',
    phone: '08036471524',
    startDate: '02/30/2019',
    endDate: '02/30/2019',
    'serial number': '904FNTX0C266',
    value: 1630000,
    store: 'STRAC',
    insurance: 9624,
    premium: 2624,
    dispatchCode: 'SDHSTRAC00006555',
    description: 'LGTV 50 UK 63000PVB sold in our store to a customer that paid us a  , yes we love money!',
    status: 'pending'
  },
];
