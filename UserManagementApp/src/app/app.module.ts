import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserDetailFormComponent } from './user-details/user-detail-form/user-detail-form.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserDetailFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
