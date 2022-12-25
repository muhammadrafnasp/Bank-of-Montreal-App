import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  constructor(private fb:FormBuilder, private ds:DataService,private router:Router) {  //(1st execute)
    //it automatically invokes when the object is created
    //object initialization
   }

  //  loginForm model
  loginForm = this.fb.group({ //group
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],//array
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]  
      
  })

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

    console.log(this.loginForm);
    // alert("you clicked login")    
  
    var acno = this.loginForm.value.acno
    var pswd = this.loginForm.value.pswd
    // var userDetails = this.ds.userDetails

    if(this.loginForm.valid){
    this.ds.login(acno,pswd)
    .subscribe((result:any)=>{
      localStorage.setItem('currentUser',JSON.stringify(result.currentUser));
      localStorage.setItem('currentAcno',JSON.stringify(result.currentAcno));
      localStorage.setItem('token',JSON.stringify(result.token));
      alert(result.message);
      this.router.navigateByUrl('dashboard')
    },
    result=>{
     alert(result.error.message)
    })

  }
}

}
