import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  addUserFormGroup: FormGroup;
  userData: MatTableDataSource<Irole>;
  userDisplayColumns: string[] = ['sn', 'name', 'role', 'email', 'status'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private fb: FormBuilder
  ) {

    this.userData = new MatTableDataSource(users);
  }

  ngOnInit() {
    //  addUserFormGroup
    this.addUserFormGroup = this.fb.group({
      title: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      role: ['', [Validators.required]],
    });

    this.userData.paginator = this.paginator;
  }


  applyManagerFilter(filterValue: string) {
    this.userData.filter = filterValue.trim().toLowerCase();
    if (this.userData.paginator) {
      this.userData.paginator.firstPage();
    }
  }

}

export interface Irole {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  status: string;
}

const users = [
  {
    firstName: 'Victor',
    lastName: 'Agidigbi',
    email: 'victor.agidigbi@zenithinsurance.com.ng',
    role: 'Admin',
    status: 'Active',
  },
  {
    firstName: 'Victor',
    lastName: 'Agidigbi',
    email: 'victor.agidigbi@zenithinsurance.com.ng',
    role: 'Underwriter',
    status: 'Active',
  },
  {
    firstName: 'Victor',
    lastName: 'Agidigbi',
    email: 'victor.agidigbi@zenithinsurance.com.ng',
    role: 'Approver',
    status: 'Active',
  },
  {
    firstName: 'Victor',
    lastName: 'Agidigbi',
    email: 'victor.agidigbi@zenithinsurance.com.ng',
    role: 'Approver',
    status: 'Active',
  },

];
