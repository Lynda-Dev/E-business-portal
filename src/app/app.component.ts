import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
// import { OnInit } from 'OLD_node_modules/@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  title = 'VendorApp';
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
  }  // oninit

}// AppComponent

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'LG TV 43inch',
    weight: 1.0079,
    symbol: '3LH4t23t',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  }, {
    position: 2,
    name: 'LG TV 23inch',
    weight: 4.0026,
    symbol: '3LH4t23t',
    description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`
  }, {
    position: 3,
    name: 'LG TV 26inch',
    weight: 6.941,
    symbol: '3LH4t23t',
    description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`
  }, {
    position: 4,
    name: 'LG TV 73inch',
    weight: 9.0122,
    symbol: '3LH4t23t',
    description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`
  },
];
