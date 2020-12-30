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
  
  search(){
    
    
    if (this.searchInput!=""){
      
      
      this.service.list = this.service.list.filter(res => {
        return res.firstName.toLocaleLowerCase().includes(this.searchInput.toLocaleLowerCase());
      });
      

    
    }else if(this.searchInput == "" ){
      this.service.refreshList();
    }
    
  }
  

}
