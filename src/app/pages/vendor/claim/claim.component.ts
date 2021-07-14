import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {
  displayedColumns: string[] = ['sn', 'product', 'serialNumber', 'incidentDate', 'notificationDate', 'value', 'ZGIPremium', 'claimAmount', 'indemnity', 'status'];
  dataSource: MatTableDataSource<IclaimData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(claimData);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}


export interface IclaimData {
  product: string;
  serialNumber: string;
  endDate: string;
  value: number;
  insurance: number;
  zgiPremium: number;
  productDiscription: string;
  incidentDate: string;
  notificationDate: string;
  claimAmount: number;
  indemnity: string;
  claimDescription: string;
  status: string;
}

const claimData: IclaimData[] = [
  {
    product: 'LGTV50UK63000PVB',
    serialNumber: '904FNTX0C266',
    endDate: '02/30/2019',
    value: 163000,
    insurance: 9624,
    zgiPremium: 2624,
    productDiscription: 'LGTV 50 UK 63000PVB sold in our store to a customer that paid us a lot of money that we wont share because we',
    incidentDate: '02/30/2019',
    notificationDate: '02/30/2019',
    claimAmount: 624,
    indemnity: 'Screen replacement',
    claimDescription: ' Description for the claim about to be made that that that that  ',
    status: 'pending',
  },
  {
    product: 'LGTV50UK63000PVB',
    serialNumber: '904FNTX0C266',
    endDate: '02/30/2019',
    value: 163000,
    insurance: 9624,
    zgiPremium: 2624,
    productDiscription: 'LGTV 50 UK 63000PVB sold in our store to a customer that paid us a lot of money that we wont share because we',
    incidentDate: '02/30/2019',
    notificationDate: '02/30/2019',
    claimAmount: 624,
    indemnity: 'Screen replacement',
    claimDescription: ' Description for the claim about to be made that that that that  ',
    status: 'paid',
  },
  {
    product: 'LGTV50UK63000PVB',
    serialNumber: '904FNTX0C266',
    endDate: '02/30/2019',
    value: 163000,
    insurance: 9624,
    zgiPremium: 2624,
    productDiscription: 'LGTV 50 UK 63000PVB sold in our store to a customer that paid us a lot of money that we wont share because we',
    incidentDate: '02/30/2019',
    notificationDate: '02/30/2019',
    claimAmount: 624,
    indemnity: 'Screen replacement',
    claimDescription: ' Description for the claim about to be made that that that that  ',
    status: 'pending',
  },
  {
    product: 'LGTV50UK63000PVB',
    serialNumber: '904FNTX0C266',
    endDate: '02/30/2019',
    value: 163000,
    insurance: 9624,
    zgiPremium: 2624,
    productDiscription: 'LGTV 50 UK 63000PVB sold in our store to a customer that paid us a lot of money that we wont share because we',
    incidentDate: '02/30/2019',
    notificationDate: '02/30/2019',
    claimAmount: 624,
    indemnity: 'Screen replacement',
    claimDescription: ' Description for the claim about to be made that that that that  ',
    status: 'pending',
  },
  {
    product: 'LGTV50UK63000PVB',
    serialNumber: '904FNTX0C266',
    endDate: '02/30/2019',
    value: 163000,
    insurance: 9624,
    zgiPremium: 2624,
    productDiscription: 'LGTV 50 UK 63000PVB sold in our store to a customer that paid us a lot of money that we wont share because we',
    incidentDate: '02/30/2019',
    notificationDate: '02/30/2019',
    claimAmount: 624,
    indemnity: 'Screen Damage',
    claimDescription: ' Description for the claim about to be made that that that that  ',
    status: 'paid',
  },
];



