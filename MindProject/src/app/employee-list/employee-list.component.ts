import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor( private http:HttpClient ,private router:Router) { }
  userlist:Useremplist=new Useremplist (); 
  dem:any;
  delete:String;
  ngOnInit() {
    this.showemplist();
  }
   deleteEmployee(empid1:String){
    this.delete=empid1;
    var url1 = "http://localhost:8080/empdeleted";
     alert( this.delete)
     
  this.http.post(url1,this.delete).subscribe(data => {
         this.router.navigate(['/emplist']);
     })
   }  
  showemplist(){
    var url  = "http://localhost:8080/emplist";
    this.http.get(url).subscribe(data=>{
     // alert(JSON.stringify(data))
    //  this.userMenu = data;
     // console.log(JSON.stringify(data));
      const test=JSON.stringify(data);
      this.dem=data;
      
      JSON.parse(test,(key ,value)=>{
        
        if(typeof key==='string')
        {
          if(key=='city'){
            this.userlist.city=value;
          }
          
          if(key=='dob'){
            this.userlist.dob=value;
          }
          if(key=='address'){
            this.userlist.address=value;
          }
 
          if(key=='lastname'){
            this.userlist.lastname=value;
          }
          if(key=='fristname'){
            this.userlist.fristname=value;
          }
          if(key=='empid'){
            this.userlist.empid = value;
          }
        }
      });
    })
  }
}

class Useremplist{
    
   empid:String;
	fristname :String;
	 lastname: String; 
	 address: String;
	 dob:String;
   mobile :String;
  city :String;
}