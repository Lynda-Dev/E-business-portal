import { Component, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ClaimFormDialogComponent } from '../../vendor/dialogs/claim-form-dialog/claim-form-dialog.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {
  displayedColumns: string[] = ['sn', 'name', 'productName', 'sumInsured', 'premium', 'referenceNo', 'phoneNo', 'date', 'status','detail'];

  dataSource: MatTableDataSource<Ivendor>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ebusinessFormGroup: FormGroup;
  searchByFormgroup: FormGroup;
 
  

  constructor(public dialog: MatDialog, private fb: FormBuilder) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(VENDOR_DATA);
    
  }



  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

   this.ebusinessFormGroup=this.fb.group({
     startDate:['',[Validators.required]],
     endDate:['',[Validators.required]],
     
    });

    this.searchByFormgroup=this.fb.group({
      searchBy:['',[Validators.required]],
      dataType:['',[Validators.required]],
      
     });

  }
  // iNIT
public getdata(){

 var startdate = this.ebusinessFormGroup.get('startDate')
 var enddate = this.ebusinessFormGroup.get('endDate')


}
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

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}


// Interfaces
export interface Ivendor {
  sn: number;
  name: string;
  productName: string;
  sumInsured: string;
  premium: string;
  referenceNo: string;
  phoneNo: string;
  date: string;
  status: string;
  
}

const VENDOR_DATA: Ivendor[] = [
  {
    sn: 1,
    name: 'Fouani Nig Ltd',
    productName: '22 Burma Rd, Apapa 106101, Lagos',
    sumInsured: '08037691450',
    premium: 'Electronics',
    referenceNo: 'Fouani@Fouani.com',
    phoneNo: 'num',
    status: 'active',
    date: '',
  },
  {
    sn: 2,
    name: 'Fouani Nig Ltd',
    productName: '22 Burma Rd, Apapa 106101, Lagos',
    sumInsured: '08037691450',
    premium: 'Electronics',
    referenceNo: 'Fouani@Fouani.com',
    phoneNo: 'num',
    status: 'active',
    date: '',
  },
  {
    sn: 3,
    name: 'Fouani Nig Ltd',
    productName: '22 Burma Rd, Apapa 106101, Lagos',
    sumInsured: '08037691450',
    premium: 'Electronics',
    referenceNo: 'Fouani@Fouani.com',
    phoneNo: 'num',
    status: 'active',
    date: '',
  },
  {
    sn: 4,
    name: 'Fouani Nig Ltd',
    productName: '22 Burma Rd, Apapa 106101, Lagos',
    sumInsured: '08037691450',
    premium: 'Electronics',
    referenceNo: 'Fouani@Fouani.com',
    phoneNo: 'num',
    status: 'active',
    date: '',
  },
  {
    sn: 5,
    name: 'Fouani Nig Ltd',
    productName: '22 Burma Rd, Apapa 106101, Lagos',
    sumInsured: '08037691450',
    premium: 'Electronics',
    referenceNo: 'Fouani@Fouani.com',
    phoneNo: 'num',
    status: 'active',
    date: '',
  },

];

