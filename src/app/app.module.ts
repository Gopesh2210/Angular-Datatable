import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataTablesModule } from 'angular-datatables';
import { HeaderModule } from './components/header/header.module';
import { UserDatatableModule } from './components/user-datatable/user-datatable.module';
import { HomeModule } from './components/home/home.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    UserDatatableModule,
    HeaderModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
