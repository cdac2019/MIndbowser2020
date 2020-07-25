import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { ManagerRegComponent } from './manager-reg/manager-reg.component';
import { ManagermbComponent } from './managermb/managermb.component';
import { ManagerLoginComponent } from './manager-login/manager-login.component';
import { EmployeeRegComponent } from './employee-reg/employee-reg.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
const routes: Routes = [
{path :'signup',component:ManagerRegComponent},
{path :'',component:ManagermbComponent},
{path :'login',component:ManagerLoginComponent},
{path :'empreg',component:EmployeeRegComponent},
{path :'emplist',component:EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
