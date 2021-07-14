import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { NumbeTowordPipe } from 'src/app/numbe2word/numbe2word.pipe';

@Component({
  selector: 'app-policy-form',
  templateUrl: './policy-form.component.html',
  styleUrls: ['./policy-form.component.css']
})
export class PolicyFormComponent implements OnInit {

  private zenithRate = 0.90;
  private vendorRate = 3;
  // public numbeToword: NumbeTowordPipe;

  public calculatingPremium = false;

  salesFormGroup: FormGroup;
  constructor(private fb: FormBuilder, ) { }

  ngOnInit() {
    this.salesFormGroup = this.fb.group({
      insuredTitle: ['', [Validators.required]],
      insuredFirstName: ['', [Validators.required]],
      insuredLastName: ['', [Validators.required]],
      insuredPhone: ['', [Validators.required]],
      product: ['', [Validators.required]],
      serialNumber: ['', [Validators.required]],
      dispatchNumber: ['', [Validators.required]],
      saleSite: ['', [Validators.required]],
      productDiscription: ['', [Validators.required]],
      policyNumber: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      value: ['', [Validators.required, Validators.minLength(4)]],
      covers: ['', [Validators.required]],
      premium: ['', [Validators.required]],
      zgiPremium: ['', [Validators.required]],
    });
  }

  public calcPremium(productValue: HTMLInputElement) {
    // Reset values
    this.clearInitialValues();
    // stop loading
    this.stopCalcLoader();


    if (this.salesFormGroup.get('value').valid && productValue.value.length >= 4) {
      // null
      // console.log(productValue.value.length);
      // start loading
      this.startCalcLoader();
      // dealy for half sec.
      setTimeout(() => {
        if (productValue.value.length >= 4) {
          this.showPremium(this.salesFormGroup.get('value').value);
        } else {
          // stop loading
          this.stopCalcLoader();
        }
      }, 4000);
    }
  }

  private showPremium(productAmount) {
    // this.rate
    // console.log(productAmount);

    const zenithpremium = ((this.zenithRate / 100) * productAmount).toFixed(2);
    const vendorePremium = ((this.vendorRate / 100) * productAmount).toFixed(2);
    // const insurance = ((this.rate) * productAmount).toFixed(2);
    // console.log('insurance here ' + insurance);
    this.applyRate(zenithpremium, vendorePremium);
  }

  private applyRate(zenithpremium, vendorePremium) {
    this.salesFormGroup.patchValue(
      {
        premium: vendorePremium,
        zgiPremium: zenithpremium
      }
    );

    // stop loading
    this.stopCalcLoader();
  }

  clearInitialValues() {
    this.salesFormGroup.get('premium').reset();
    this.salesFormGroup.get('zgiPremium').reset();
  }


  startCalcLoader() {

    this.calculatingPremium = true;
  }

  stopCalcLoader() {

    this.calculatingPremium = false;
  }
}
