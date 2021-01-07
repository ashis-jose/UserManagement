import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserDetail } from 'src/app/shared/user-detail.model';
import { UserDetailService } from 'src/app/shared/user-detail.service';

@Component({
  selector: 'app-user-detail-form',
  templateUrl: './user-detail-form.component.html',
  styles: [
  ]
})
export class UserDetailFormComponent implements OnInit {

  constructor(public service:UserDetailService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    
  }
  onSubmit(form:NgForm){
    if (this.service.formData.userDetailId==0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form:NgForm){
    this.service.postUserDetail().subscribe(
      res =>{
        this.resetForm(form);
        this.toastr.success('Submitted successfully','User Management');
        this.service.refreshList();
      },
      err => {
       console.log(err);
       this.toastr.error("Sorry, server returns following error: " + err.statusText,"ERROR:" + err.status);
      }
    );
  }

  updateRecord(form:NgForm){
    this.service.putUserDetail().subscribe(
      res =>{
        this.resetForm(form);
        this.toastr.info('Updated successfully','User Management');
        this.service.refreshList();
      },
      err => { 
        this.toastr.error("Sorry, server returns following error: " + err.statusText,"ERROR:" + err.status);
        console.log(err); }
    );
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData=new UserDetail();
  }
}
