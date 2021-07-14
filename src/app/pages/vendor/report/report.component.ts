import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  claimsFormGroup: FormGroup;
  constructor(private fb: FormBuilder, ) { }

  ngOnInit() {
    this.claimsFormGroup = this.fb.group({
      reportType: ['', [Validators.required]],
      reportStatus: ['', [Validators.required]],
      dateFrom: ['', [Validators.required]],
      dateTo: ['', [Validators.required]],
    });
  }

}
