import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { R3ResolvedDependencyType } from '@angular/compiler';
@Component({
  selector: 'app-manager-reg',
  templateUrl: './manager-reg.component.html',
  styleUrls: ['./manager-reg.component.css']
})
export class ManagerRegComponent implements OnInit {
  reg: Register = new Register();
  data1: Status=new Status();
  
  constructor(private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
  }
  registermanager(){

    var url = "http://localhost:8080/register";
    // alert(JSON.stringify(this.reg))
     
  this.http.post(url, this.reg).subscribe(data => {
      // alert(JSON.stringify(data));
        alert("Manager Register Successfull!!!");
      
         this.router.navigate(['/login']);
     })
   }
}
class Register
{

  fristname : String;
  lastname : String;
  password : String;
  email : String;
  address:String;
  dob:String;


}
class Status{
  statusCode:Number;statusMessage:String;

}