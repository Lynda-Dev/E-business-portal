import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-admin-covers',
  templateUrl: './admin-covers.component.html',
  styleUrls: ['./admin-covers.component.css']
})
export class AdminCoversComponent implements OnInit {
  addCoverFormGroup: FormGroup;
  managerData: MatTableDataSource<Imanagers>;
  managerColumns: string[] = ['sn', 'coverName', 'status'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  constructor(
    private fb: FormBuilder
  ) {

    this.managerData = new MatTableDataSource(managers);
  }

  ngOnInit() {
    //  addCoverFormGroup
    this.addCoverFormGroup = this.fb.group({
      coverName: ['', [Validators.required]],
      coverDetails: ['', [Validators.required]],
    });

    this.managerData.paginator = this.paginator;
    // this.managerData.sort = this.sort;
  }


  applyManagerFilter(filterValue: string) {
    this.managerData.filter = filterValue.trim().toLowerCase();
    if (this.managerData.paginator) {
      this.managerData.paginator.firstPage();
    }
  }

}


export interface Imanagers {
  coverName: string;
  status: string;
}


const managers = [
  {
    coverName: 'Repair',
    status: 'Active',
  },
  {
    coverName: 'Replacement',
    status: 'Active',
  },
  {
    coverName: 'Screen Replacement only',
    status: 'Active',
  },
];
