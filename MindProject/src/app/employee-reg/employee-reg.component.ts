import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-reg',
  templateUrl: './employee-reg.component.html',
  styleUrls: ['./employee-reg.component.css']
})
export class EmployeeRegComponent implements OnInit {
emp :employee=new employee();
  constructor(private http : HttpClient ,private router: Router) { }

  ngOnInit(): void {
  }
  registeremploye(){

    var url = "http://localhost:8080/empreg";
    // alert(JSON.stringify(this.reg))
     
  this.http.post(url, this.emp).subscribe(data => {
    alert("Employee Registration Successfull!!!");
         this.router.navigate(['/emplist']);
     })
   }

}
class employee{
      empid :String;
  fristname :String;
   lastname :String;
    address :String;
        dob :String;
     mobile :number
       city :String;
 
}