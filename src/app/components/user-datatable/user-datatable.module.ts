import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDatatableComponent } from './user-datatable.component';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [UserDatatableComponent],
  imports: [
    CommonModule,
    DataTablesModule
  ],
  exports:[UserDatatableComponent]
})
export class UserDatatableModule { }
