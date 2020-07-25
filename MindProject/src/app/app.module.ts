import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagermbComponent } from './managermb/managermb.component';
import { ManagerRegComponent } from './manager-reg/manager-reg.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ManagerLoginComponent } from './manager-login/manager-login.component';
import { EmployeeRegComponent } from './employee-reg/employee-reg.component';
import { EmployeeListComponent } from './employee-list/employee-list.component'; 
@NgModule({
  declarations: [
    AppComponent,
    ManagermbComponent,
    ManagerRegComponent,
    ManagerLoginComponent,
    EmployeeRegComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
     
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
