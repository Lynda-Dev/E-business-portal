import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, Validators, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { numberFormat } from 'src/app/validators/validators';

@Component({
  selector: 'app-admin-roles',
  templateUrl: './admin-roles.component.html',
  styleUrls: ['./admin-roles.component.css']
})
export class AdminRolesComponent implements OnInit {

  displayedColumns: string[] = ['sn', 'lob', 'status'];
  roleColumns: string[] = ['sn', 'roleName', 'status'];
  rateDisplayedColumns: string[] = ['sn', 'rate', 'status'];
  dataSource: MatTableDataSource<Ilob>;
  roleData: MatTableDataSource<Iroles>;
  rateData: MatTableDataSource<Irates>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  vendorProfileFormGroup: FormGroup;
  addRoleFormGroup: FormGroup;
  addLobFormGroup: FormGroup;
  addRateFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder) {
    // const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(lob);
    this.roleData = new MatTableDataSource(roles);
    this.rateData = new MatTableDataSource(rates);
  }

  ngOnInit() {
    //  addRoleFormGroup
    this.addRoleFormGroup = this.fb.group({
      roleName: ['', [Validators.required]],
      roleDetails: ['', [Validators.required]],
    });

    //  addLobFormGroup
    this.addLobFormGroup = this.fb.group({
      lob: ['', [Validators.required]],
      lobDetails: ['', [Validators.required]],
    });

    //  addLobFormGroup
    this.addRateFormGroup = this.fb.group({
      rate: ['', [Validators.required, Validators.pattern(numberFormat)]],
      rateDetails: ['', [Validators.required]],
    });


    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.roleData.paginator = this.paginator;
    this.rateData.paginator = this.paginator;
  }// ngOnInit

}// VendorSettingsComponent


export interface Iroles {
  roleName: string;
  status: string;
}

export interface Ilob {
  lobName: string;
  status: string;
}

export interface Irates {
  rate: number;
  status: string;
}

const lob = [
  {
    lobName: 'Electronics',
    status: 'Active',
  },
  {
    lobName: 'Auto Sales',
    status: 'Active',
  },
  {
    lobName: 'Loan System',
    status: 'Active',
  },
  {
    lobName: 'Others',
    status: 'Active',
  },
];


const roles = [
  {
    roleName: 'Admin',
    status: 'Active',
  },
  {
    roleName: 'Underwriter',
    status: 'Active',
  },
  {
    roleName: 'Approver',
    status: 'Active',
  },

];


const rates = [
  {
    rate: 3,
    status: 'Active',
  },
  {
    rate: 5,
    status: 'Active',
  },
  {
    rate: 10,
    status: 'Active',
  },
  {
    rate: 15,
    status: 'Active',
  },

  {
    rate: 20,
    status: 'Active',
  },


];
