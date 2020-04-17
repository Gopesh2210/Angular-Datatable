import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    // random me user data
    // Note : results {param} defines how many data to return
    const url = "https://randomuser.me/api/?results=100";

    return this.http.get<any>(url);

  }
}
