import { Component, OnInit, ViewChild, Output, EventEmitter } from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { MatDatepickerInputEvent, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import moment from "moment";
import { ClaimFormDialogComponent } from "../../vendor/dialogs/view-form-dialog/view-form-dialog.component";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { ClaimService } from "../../../services/search.service";
import { aggregateBy, process } from "@progress/kendo-data-query";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
@Output() dateChange = new EventEmitter<MatDatepickerInputEvent<any>>();
@Output() endDateChange: EventEmitter<MatDatepickerInputEvent<any>> = new EventEmitter();

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

  loaded = false;

  dataSource: MatTableDataSource<IRes>;

  // dataSource: MatTableDataSource<Ivendor>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ebusinessFormGroup: FormGroup;
  searchByFormgroup: FormGroup;

  public selectedType: string = '';

  public loadingDataByDate: boolean = false;

  public loadingDataById: boolean = false;

  public emptydataSource: boolean = true;

  public startMax = new Date();

  public invalidDateRange: boolean = false;

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

  // start date change
  onDateChange(event: Event) {
    this.dateChange.emit()
    console.log('date change! ', event.target['value']);
  }

  // start date change
  onEndDateChange(event: Event) {
    this.dateChange.emit()
    console.log('date change! ', event.target['value']);
  }

  onChange() {
    const idType = ['Policy No', 'Ref No', 'Quote Id'];
    const index = parseInt(this.searchByFormgroup.value["dataType"]);

    this.selectedType = idType[index - 1];
  }

  public getDataById() {
    this.loadingDataById= true;
    this.emptydataSource = true;

    const payload = {
      searchParam: this.searchByFormgroup.value["searchBy"],
      searchType: parseInt(this.searchByFormgroup.value["dataType"])
    }

    const bearer = localStorage.getItem('data');

    this.searchService.retrieveSearchById(payload, bearer)
      .subscribe(
        res => {
          this.dataSource = new MatTableDataSource(res['data']);

          if (res['data']['length'] > 0) {

            this.loaded = true;
            this.emptydataSource = false;

            this.reportsList =  res['data'];
            this.processExcel();
          }

          this.loadingDataById= false;
        },
        error => {
          console.log('error: ', error)
          this.loadingDataById= false;
        }
      )
  }

  public getdata() {
    this.loadingDataByDate = true;

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

    if (startDate > endDate) {
      this.invalidDateRange = true;
    } else {
      this.invalidDateRange = false;

      const payload = {
        startDate,
        endDate
      }

      const bearer = localStorage.getItem('data');

      this.searchService.retrieveSearch(payload, bearer)
        .subscribe(
          res => {
            this.dataSource = new MatTableDataSource(res['data']);
            if (res['data']['length'] > 0) {
              this.emptydataSource = false;
              this.loaded = true;

              this.reportsList =  res['data'];
              this.processExcel();
            }

            this.loadingDataByDate = false;
          },
          error => {
            console.log('error: ', error)

            this.loadingDataByDate = false;
          }
        )
    }
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
