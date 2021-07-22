import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularmaterialModule } from 'src/app/ui/materials/angularmaterial.module';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AngularmaterialModule,
    ExcelExportModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class AdminModule { }
