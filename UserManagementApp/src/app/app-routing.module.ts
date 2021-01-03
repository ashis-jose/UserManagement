import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LoginComponent } from './auth/components/login/login.component';

const routes:Routes = [
    {path: '',redirectTo:'login', pathMatch: 'full'},
    {path:'login', component:LoginComponent},
    {path:'user-detail', component:UserDetailsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
