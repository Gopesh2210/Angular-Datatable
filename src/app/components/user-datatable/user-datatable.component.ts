import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { FetchDataService } from 'src/app/services/fetch-data.service';

@Component({
  selector: 'app-user-datatable',
  templateUrl: './user-datatable.component.html',
  styleUrls: ['./user-datatable.component.scss']
})
export class UserDatatableComponent implements OnInit,OnDestroy {

  @ViewChild(DataTableDirective, {static: false})
  datatableElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  userData: any = [];
  totalRecords: number;
  // We use this trigger because fetching the list of userData can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();
  isLoading: boolean;

  constructor(private fetchData: FetchDataService) { }

  ngOnInit() {

    this.isLoading = true;

    // defines the appearance of the table initially
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      autoWidth: true,
      order: [[0,'asc']],
      responsive: true
    };

    this.userData = this.fetchData.getData().subscribe((data) => {
      console.log(data);
      this.userData = data.results;
      this.totalRecords = data.results.length;
      this.isLoading = false;
      this.dtTrigger.next();
    });
    
  }

  ngOnDestroy(){
    this.dtTrigger.unsubscribe();
  }

}
