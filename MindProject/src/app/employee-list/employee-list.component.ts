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
  userlist1:Useremplist1=new Useremplist1 ();
  dem:any;
  delete:String;
  update1:String;
  ngOnInit() {
    this.showemplist();
  }
   deleteEmployee(empid1:String){
    this.delete=empid1;
    var url1 = "http://localhost:8080/empdeleted";
     //alert( this.delete)
     
  this.http.post(url1,this.delete).subscribe(data => {
         this.router.navigate(['/emplist']);
     })
   }
   //select  emp id ,which employee updated
   UpdateEmployee1(empidupdate:String){this.update1=empidupdate;
  this.userlist.empid=this.update1}
  // Update employee list
   UpdateEmployee(userlist1) {
    var url1 = "http://localhost:8080/empUpdate";
    //alert( JSON.stringify(this.userlist1))
    this.userlist.empid=this.update1
    this.userlist.fristname=this.userlist1.fristname1;
    this.userlist.lastname=this.userlist1.lastname1;
    this.userlist.address=this.userlist1.address1;
    this.userlist.mobile=this.userlist1.mobile1;
    this.userlist.city=this.userlist1.city1;
    this.userlist.dob=this.userlist1.dob1;
   // alert( JSON.stringify(this.userlist))
 this.http.post(url1,this.userlist).subscribe(data => {
   alert("Employee Detail Update !!!")
        this.router.navigate(['/emplist']);
    })

   } 







   //LIst of Employee
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
class Useremplist1{
 fristname1 :String;
 lastname1: String; 
 address1: String;
 dob1:String;
 mobile1 :String;
city1 :String;
}