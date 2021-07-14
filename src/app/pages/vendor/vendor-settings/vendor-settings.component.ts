import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, Validators, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-vendor-settings',
  templateUrl: './vendor-settings.component.html',
  styleUrls: ['./vendor-settings.component.css']
})
export class VendorSettingsComponent implements OnInit {
  displayedColumns: string[] = ['sn', 'branchName', 'branchCode', 'branchManager', 'edit', 'status'];
  managerColumns: string[] = ['sn', 'name', 'phone', 'edit', 'status'];
  dataSource: MatTableDataSource<Ibranches>;
  managerData: MatTableDataSource<Imanagers>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  vendorProfileFormGroup: FormGroup;
  addBranchFormGroup: FormGroup;
  addManagerFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder) {
    // const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(branches);
    this.managerData = new MatTableDataSource(managers);
  }

  ngOnInit() {
    //  vendorProfileFormGroup
    this.vendorProfileFormGroup = this.fb.group({
      businessName: [vendorProfileData.businessName, [Validators.required]],
      lineOfBusiness: [vendorProfileData.lineOfBusiness, [Validators.required]],
      phone: [vendorProfileData.phone, [Validators.required]],
      contactAddress: [vendorProfileData.contactAddress, [Validators.required]],

    });

    //  addBranchFormGroup
    this.addBranchFormGroup = this.fb.group({
      branchName: ['', [Validators.required]],
      branchCode: ['', [Validators.required]],
      branchManager: ['', [Validators.required]],
      branchPhone: ['', [Validators.required]],
      branchAddress: ['', [Validators.required]],
    });

    //  addBranchFormGroup
    this.addManagerFormGroup = this.fb.group({
      title: ['', [Validators.required]],
      fisrName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });


    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.managerData.paginator = this.paginator;
    this.managerData.sort = this.sort;
  }// ngOnInit

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applyManagerFilter(filterValue: string) {
    this.managerData.filter = filterValue.trim().toLowerCase();
    if (this.managerData.paginator) {
      this.managerData.paginator.firstPage();
    }
  }
}// VendorSettingsComponent


const vendorProfileData = {
  businessName: 'Spectranet Nigeria Ltd',
  lineOfBusiness: 'LG Service center',
  phone: '08036471524',
  contactAddress: '01 Burma Rd, Apapa 106101, Lagos',
};


export interface Imanagers {
  title: string;
  fisrName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  status: string;
}

export interface Ibranches {
  branchName: string;
  branchCode: string;
  branchManager: string;
  branchPhone: string;
  branchAddress: string;
  status: string;
}

const branches = [
  {
    branchName: 'FouanI, Lekki',
    branchCode: 'LKASATK',
    branchManager: 'Victor Agidigbi',
    branchPhone: '08036471524',
    branchAddress: '22 Burma Rd, Apapa 106101, Lagos',
    status: 'Active',
  },
  {
    branchName: 'FouanI, Lekki',
    branchCode: 'LKASATK',
    branchManager: 'Victor Agidigbi',
    branchPhone: '08036471524',
    branchAddress: '22 Burma Rd, Apapa 106101, Lagos',
    status: 'Active',
  },
  {
    branchName: 'FouanI, Lekki',
    branchCode: 'LKASATK',
    branchManager: 'Victor Agidigbi',
    branchPhone: '08036471524',
    branchAddress: '22 Burma Rd, Apapa 106101, Lagos',
    status: 'Active',
  },
  {
    branchName: 'FouanI, Lekki',
    branchCode: 'LKASATK',
    branchManager: 'Victor Agidigbi',
    branchPhone: '08036471524',
    branchAddress: '22 Burma Rd, Apapa 106101, Lagos',
    status: 'Inactive',
  },
];


const managers = [
  {
    title: 'Mr',
    fisrName: 'Victor',
    lastName: 'Agidigbi',
    phoneNumber: '08036471524',
    email: 'victor.agidigbi@fouani.com',
    status: 'Active',
  },
  {
    title: 'Mr',
    fisrName: 'Victor',
    lastName: 'Agidigbi',
    phoneNumber: '08036471524',
    email: 'victor.agidigbi@fouani.com',
    status: 'Active',
  },
  {
    title: 'Mr',
    fisrName: 'Victor',
    lastName: 'Agidigbi',
    phoneNumber: '08036471524',
    email: 'victor.agidigbi@fouani.com',
    status: 'Inactive',
  },
  {
    title: 'Mr',
    fisrName: 'Victor',
    lastName: 'Agidigbi',
    phoneNumber: '08036471524',
    email: 'victor.agidigbi@fouani.com',
    status: 'Active',
  },
  {
    title: 'Mr',
    fisrName: 'Victor',
    lastName: 'Agidigbi',
    phoneNumber: '08036471524',
    email: 'victor.agidigbi@fouani.com',
    status: 'Inactive',
  },
];
