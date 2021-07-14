import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {
  AddVendorFormGroup: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    //  addBranchFormGroup
    this.AddVendorFormGroup = this.fb.group({
      busnessName: ['', [Validators.required]],
      lob: ['', [Validators.required]],
      businessAddress: ['', [Validators.required]],
      businessPhone: ['', [Validators.required]],
      businessEmail: ['', [Validators.required]],
      zenithRate: ['', [Validators.required]],
      vendoreRate: ['', [Validators.required]],
      vendorPolicyNumber: ['', [Validators.required]],
      title: ['', [Validators.required]],
      fisrName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
  }

}
