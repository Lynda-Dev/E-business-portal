import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public active: boolean;
  public dashboard = dashboard;
  constructor() { }

  ngOnInit() {
    this.active = true;

  }



  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.active = true;
  }

}


const dashboard = [
  {
    count: 256,
    title: 'Total Policies per Month',
    icon: 'fa-hand-holding-heart',
    bgColor: 'bg-primary',
    badgeColor: 'badge-danger',
  },
  {
    count: 256,
    title: 'Total Paid Policies per Month',
    icon: 'fa-money-bill-alt',
    bgColor: 'bg-info',
    badgeColor: 'badge-danger',
  },
  {
    count: 256,
    title: ' Total Claims per Month',
    icon: 'fa-hand-holding-heart',
    bgColor: 'bg-danger',
    badgeColor: 'badge-danger',
  },
  {
    count: 256,
    title: 'Total  Paid  Claims per Month',
    icon: 'fa-money-bill-alt',
    bgColor: 'bg-success',
    badgeColor: 'badge-danger',
  },
];
