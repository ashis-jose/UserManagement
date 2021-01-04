import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { AdminDetailService } from 'src/app/shared/admin-detail.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, public service:AdminDetailService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  onLogin(form:NgForm){
    for (let ad of this.service.list){
      if (this.service.adminEmail==ad.adminEmail && this.service.adminPassword==ad.adminPassword)
        this.router.navigateByUrl('/user-detail');
      
      else {
        alert ('Invalid Username or Password');
      }
    }
    
  }

}
