import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { //(3rd execute)


  aim = "your perfect banking partner"
  account = "enter your account here"



  acno = ""
  pswd = ""

//database

userDetails:any = {
  1000:{acno:1000,username:"Amal",password:1000,balance:1000},
  1001:{acno:1001,username:"Ammu",password:1001,balance:1001},
  1002:{acno:1002,username:"Arun",password:1002,balance:1002},

}

  //class- collection of properties and functions
  //properties/varaiables
  //function/methods -> user defined functions //(4th execute)

  constructor() {  //(1st execute)
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

  // login(){
  //   // alert("you clicked login")
  //   var acno = this.acno
  //   var pswd = this.pswd
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



  login(a:any,p:any){
    // alert("you clicked login")
    var acno = a.value
    var pswd = p.value
    var userDetails = this.userDetails


    if(acno in userDetails){
      if(pswd == userDetails[acno]['password']){
        alert('login succsseful')
      }
      else{
        alert('inavalid password')
      }
    }
    else{
      alert('invalid username')
    }

  }

}
