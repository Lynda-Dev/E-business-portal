import { Component, OnInit, ViewChild } from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import moment from "moment";
import { ClaimFormDialogComponent } from "../../vendor/dialogs/claim-form-dialog/claim-form-dialog.component";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { ClaimService } from "../../../services/claim.service";
import { aggregateBy, process } from "@progress/kendo-data-query";
@Component({
  selector: "app-vendors",
  templateUrl: "./vendors.component.html",
  styleUrls: ["./vendors.component.css"],
})
export class VendorsComponent implements OnInit {
  displayedColumns: string[] = [
    "sn",
    "name",
    "productName",
    "sumInsured",
    "premium",
    "referenceNo",
    "phoneNo",
    "date",
    "status",
    "detail",
  ];

  dataSource: MatTableDataSource<IRes>;

  // dataSource: MatTableDataSource<Ivendor>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ebusinessFormGroup: FormGroup;
  searchByFormgroup: FormGroup;

  public emptydataSource: boolean = true;

  public reportGroup: any[];
  public data: any[];
  public reportsList: any;

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private searchService: ClaimService
  ) {
    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(VENDOR_DATA);
    this.dataSource = new MatTableDataSource(VENDOR_DATA1);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.ebusinessFormGroup = this.fb.group({
      startDate: ["", [Validators.required]],
      endDate: ["", [Validators.required]],
    });

    this.searchByFormgroup = this.fb.group({
      searchBy: ["", [Validators.required]],
      dataType: ["", [Validators.required]],
    });
  }
  // iNIT

  public getDataById() {
    this.emptydataSource = true;

    const payload = {
      searchParam: this.searchByFormgroup.value["searchBy"],
      searchType: parseInt(this.searchByFormgroup.value["dataType"])
    }

    console.log('search by: ', this.searchByFormgroup.value["searchBy"])
    console.log('data type: ', this.searchByFormgroup.value["dataType"])

    this.searchService.retrieveSearchById(payload)
      .subscribe(
        res => {
          this.dataSource = new MatTableDataSource(res['data']);

          if (res['data']['length'] > 0) {
            this.emptydataSource = false;
          }
          console.log('length: ', res['data']['length'])
        },
        error => {
          console.log('error: ', error)
        }
      )

  }

  public getdata() {
    this.emptydataSource = true;
    var formStartDate = this.ebusinessFormGroup.value["startDate"];

    const startDate = moment(
      new Date(formStartDate),
      "YYYY-MM-DD",
      false
    ).format();

    var formEndDate = this.ebusinessFormGroup.value["endDate"];
    const endDate = moment(new Date(formEndDate), "YYYY-MM-DD", false).format();

    console.log(`start date: ${startDate}, end date: ${endDate}`);

    const payload = {
      startDate,
      endDate
    }

    this.searchService.retrieveSearch(payload)
      .subscribe(
        res => {
          this.dataSource = new MatTableDataSource(res['data']);
          if (res['data']['length'] > 0) {
            this.emptydataSource = false;
          console.log('code: ', res['code'])
          console.log('data: ', res['data'])
          this.reportsList =  res['data'];
          this.processExcel();
        }
      },
        error => {
          console.log('error: ', error)
        }
      )

  }


  public processExcel() {
    // Tie excel export data to result data
    this.data = process(this.reportsList, {
      group: this.reportGroup
    }).data;
  }


  public openClaimDialog(claim) {
    const dialogRef = this.dialog.open(ClaimFormDialogComponent, {
      data: {
        claim: claim,
      },
      height: "1920px",
      width: "8010px",
    });

    // Whwn Dialog Closes
    dialogRef.afterClosed().subscribe((result) => {
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

export interface IRes {
  refNo: string;
  duration: string;
  quoteId: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  engineNumber: string;
  chassisInformation: string;
  registrationNumber: string;
  yearOfmake: string;
  vehicleMake: string;
  vehicleModel: string;
  licenseFilePath: string;
  product: string;
  policyStatusId: string;
  customPolicyNumber: string;
  insured: string;
  transactionStatus: string;
  amount: string;
  merch_txnref: string;
  gateway: string;
  isProcessed: string;
  address: string;
  date: string;
}

const VENDOR_DATA1: IRes[] = []

const VENDOR_DATA: Ivendor[] = [
  {
    sn: 1,
    name: "Fouani Nig Ltd",
    productName: "22 Burma Rd, Apapa 106101, Lagos",
    sumInsured: "08037691450",
    premium: "Electronics",
    referenceNo: "Fouani@Fouani.com",
    phoneNo: "num",
    status: "active",
    date: "",
  },
  {
    sn: 2,
    name: "Fouani Nig Ltd",
    productName: "22 Burma Rd, Apapa 106101, Lagos",
    sumInsured: "08037691450",
    premium: "Electronics",
    referenceNo: "Fouani@Fouani.com",
    phoneNo: "num",
    status: "active",
    date: "",
  },
  {
    sn: 3,
    name: "Fouani Nig Ltd",
    productName: "22 Burma Rd, Apapa 106101, Lagos",
    sumInsured: "08037691450",
    premium: "Electronics",
    referenceNo: "Fouani@Fouani.com",
    phoneNo: "num",
    status: "active",
    date: "",
  },
  {
    sn: 4,
    name: "Fouani Nig Ltd",
    productName: "22 Burma Rd, Apapa 106101, Lagos",
    sumInsured: "08037691450",
    premium: "Electronics",
    referenceNo: "Fouani@Fouani.com",
    phoneNo: "num",
    status: "active",
    date: "",
  },
  {
    sn: 5,
    name: "Fouani Nig Ltd",
    productName: "22 Burma Rd, Apapa 106101, Lagos",
    sumInsured: "08037691450",
    premium: "Electronics",
    referenceNo: "Fouani@Fouani.com",
    phoneNo: "num",
    status: "active",
    date: "",
  },
];
