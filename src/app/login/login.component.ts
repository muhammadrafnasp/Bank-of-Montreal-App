import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { //(3rd execute)


  aim = "your perfect banking partner"
  account = "enter your account here"


  acno = "";
  pswd = "";



  //class- collection of properties and functions
  //properties/varaiables
  //function/methods -> user defined functions //(4th execute)
  //dependency injection
  constructor(private ds:DataService,private router:Router) {  //(1st execute)
    //it automatically invokes when the object is created
    //object initialization
   }

  ngOnInit(): void { //(2nd execute)

    //its a life cycle hooks of angular
    //when the component is created at same time it will initialize or authorized
  }


  acnoChange(event:any){
    console.log(event);
    this.acno = event.target.value //1000
    console.log(this.acno);
    
    
  }

  pswdChange(event:any){
    this.pswd = event.target.value
    console.log(this.pswd);
    
    
  }

  login(){
    // alert("you clicked login")
    var acno = this.acno
    var pswd = this.pswd
    var userDetails = this.ds.userDetails
    const result = this.ds.login(acno,pswd);



    if(result){

      alert('login succsseful')
      this.router.navigateByUrl('dashboard')


    }
    else{
      alert('Login failed')
    }

  }



  // login(a:any,p:any){
  //   // alert("you clicked login")
  //   var acno = a.value
  //   var pswd = p.value
  //   var userDetails = this.userDetails


  //   if(acno in userDetails){
  //     if(pswd == userDetails[acno]['password']){
  //       alert('login succsseful')
  //     }
  //     else{
  //       alert('inavalid password')
  //     }
  //   }
  //   else{
  //     alert('invalid username')
  //   }

  // }

}
