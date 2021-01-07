import { Injectable } from '@angular/core';
import { UserDetail } from './user-detail.model';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  constructor(private http:HttpClient) { }
  readonly baseURL = 'http://localhost:3139/api/UserDetail'

  formData: UserDetail = new UserDetail();
  list : UserDetail[];
  
  
  
  
  
  postUserDetail(){
    return this.http.post(this.baseURL,this.formData);
  }

  putUserDetail(){
    return this.http.put(`${this.baseURL}/${this.formData.userDetailId}`,this.formData);
  }

  deleteUserDetail(id:number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList()
  {
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as UserDetail[])
  }
  getUser(id:number)
  {
    return this.http.get(`${this.baseURL}/${id}`); 
    
  }

}
