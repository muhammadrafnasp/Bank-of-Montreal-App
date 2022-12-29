import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

uname ="";
pswd ="";
acno="";

  constructor(private fb:FormBuilder, private ds:DataService,private router:Router) { }

// registartion model
registerForm = this.fb.group({ //group
  uname:['',[Validators.required,Validators.pattern('[a-z A-Z]*')]],
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],//array
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
})

// control pass to ts to html file
  ngOnInit(): void {
  }

  register(){
    console.log(this.registerForm);
    
    // alert("register clicked")

    var uname=this.registerForm.value.uname;
    var acno=this.registerForm.value.acno;
    var password=this.registerForm.value.pswd;
    if(this.registerForm.valid){

    
    console.log(this.registerForm.get('uname')?.errors); //valid or not
    this.ds.register(acno,uname,password)
    .subscribe((result:any)=>{
      alert(result.message);
      this.router.navigateByUrl('')
    })
  }
    else{
      alert('Invalid form');

    }

  }

}



    

  //   if(result){
  //     alert('register successful');
  //     this.router.navigateByUrl('')
  //   }
  //   else{
  //     alert('user already registered');
  //     this.router.navigateByUrl('register')
  //   }
 
  // }else{
  //   alert('Invalid form');
  // }

