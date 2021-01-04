import { Injectable } from '@angular/core';
import { AdminDetail } from './admin-detail.model';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdminDetailService {
 
  readonly baseURL = 'http://localhost:3139/api/AdminDetails'

  list: AdminDetail[];
  adminEmail:string;
  adminPassword:string;

  constructor(private http:HttpClient) { }

  refreshList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list =  res as AdminDetail[]);
  }
  


}
