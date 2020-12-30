import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserDetail } from '../shared/user-detail.model';
import { UserDetailService } from '../shared/user-detail.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {
  

  constructor(public service: UserDetailService,
  private toastr:ToastrService) { }
  public showModal : boolean = false;
  public searchInput : string;
  public searchInput1 : string;
  public searchInput2 : string;
  public searchInput3 : string;
  public searchInput4 : string;
  public searchInput5 : string;
  public searchInput6 : string;
  
 
  inputKey : string;
  ngOnInit(): void {
    this.service.refreshList();
    
    
    
  }
  
  updateForm(selectedRecord:UserDetail){
    this.service.formData = Object.assign({},selectedRecord);
  }

  onDelete(id:number){
    if (confirm('Are you sure to delete this record?'))
    {
    this.service.deleteUserDetail(id)
    .subscribe(
      res=> {
        this.service.refreshList();
        this.toastr.error("Deleted Successfully",'User Management')
        
      },
      err =>{console.log(err)}
    )
    }
  }
  
  searchFN(){
    if (this.searchInput!=""){
      this.service.list = this.service.list.filter(res => {
        return res.firstName.toLocaleLowerCase().includes(this.searchInput.toLocaleLowerCase());
      });
      }else if(this.searchInput == "" ){
      this.service.refreshList();
    }
  }
  searchLN(){
    if (this.searchInput1!=""){
      this.service.list = this.service.list.filter(res => {
        return res.lastName.toLocaleLowerCase().includes(this.searchInput1.toLocaleLowerCase());
      });
      }else if(this.searchInput1 == "" ){
      this.service.refreshList();
    }
  }
  searchEM(){
    if (this.searchInput2!=""){
      this.service.list = this.service.list.filter(res => {
        return res.email.toLocaleLowerCase().includes(this.searchInput2.toLocaleLowerCase());
      });
      }else if(this.searchInput2 == "" ){
      this.service.refreshList();
    }
  }
  searchP(){
    if (this.searchInput3!=""){
      this.service.list = this.service.list.filter(res => {
        return res.phone.toLocaleLowerCase().includes(this.searchInput3.toLocaleLowerCase());
      });
      }else if(this.searchInput3 == "" ){
      this.service.refreshList();
    }
  }
  searchAD(){
    if (this.searchInput4!=""){
      this.service.list = this.service.list.filter(res => {
        return res.address.toLocaleLowerCase().includes(this.searchInput4.toLocaleLowerCase());
      });
      }else if(this.searchInput4 == "" ){
      this.service.refreshList();
    }
  }
  searchG(){
    if (this.searchInput5!=""){
      this.service.list = this.service.list.filter(res => {
        return res.gender.toLocaleLowerCase().includes(this.searchInput5.toLocaleLowerCase());
      });
      }else if(this.searchInput5 == "" ){
      this.service.refreshList();
    }
  }
  searchAC(){
    if (this.searchInput6!=""){
      this.service.list = this.service.list.filter(res => {
        return res.active.toLocaleLowerCase().includes(this.searchInput6.toLocaleLowerCase());
      });
      }else if(this.searchInput6 == "" ){
      this.service.refreshList();
    }
  }

  

}
