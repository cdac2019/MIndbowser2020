import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.css']
})
export class ManagerLoginComponent implements OnInit {
login:loginmanager=new loginmanager;
logindata:String="";
  constructor(private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
  }

  loginuser()
  {
    var url = "http://localhost:8080/login";
   // alert(JSON.stringify(this.login))

    this.http.post(url, this.login).subscribe(data => {
      alert("Manager Login Successfull!!!")
      this.router.navigate(['/empreg']);
       
    })    
  }
}
class loginmanager
{
  password : String;
  email:String;
}