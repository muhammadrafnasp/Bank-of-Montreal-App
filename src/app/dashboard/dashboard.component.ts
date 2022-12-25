import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user = '';

  constructor(private fb:FormBuilder, private ds:DataService, private router:Router) {
    this.user=this.ds.currentUser,this.sdate=new Date();
   }


  acno='';
  pswd='';
  amount='';

  
  acno1='';
  pswd1='';
  amount1='';


  // currentDate
  sdate:any;

// depositForm model
depositForm = this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],//array
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  

})
// withdrawForm model

withdrawForm = this.fb.group({
  acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],//array
  pswd1:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  amount1:['',[Validators.required,Validators.pattern('[0-9]*')]]


})


  ngOnInit(): void {
    // if(!localStorage.getItem('currentAcno')){
    //   alert('Please login first');
    //   this.router.navigateByUrl('');
    // }
    this.user=JSON.parse(localStorage.getItem('currentUser')||'');
    console.log(this.user);
    
  }

  deposit(){
  console.log(this.depositForm);  
  // alert('clicked');
  let acno = this.depositForm.value.acno;
  let pswd = this.depositForm.value.pswd;
  let amount = this.depositForm.value.amount;
  
  if(this.depositForm.valid){
  this.ds.deposit(acno,pswd,amount)

  .subscribe((result:any)=>{
    alert(result.message)

  },
  result=>{
    alert(result.error.message)
  })

  }
}



  withdraw(){
    console.log(this.withdrawForm);
    
    // alert('clicked');
    let acno = this.withdrawForm.value.acno1;
    let pswd = this.withdrawForm.value.pswd1;
    let amount = this.withdrawForm.value.amount1;
    
    if(this.withdrawForm.valid){
    const result = this.ds.withdraw(acno,pswd,amount)

    if(result){
      alert(`${amount} is debited...available balance is ${result}`)
    }
  }else{
    alert('Invalid form')
  }

  }


  logout(){
  // alert('clicked');
  // remove currentAcno and currentUser from localStorage
  localStorage.removeItem('currentAcno');
  localStorage.removeItem('currentUser');
  this.router.navigateByUrl('');
  }

delete(){
  // alert('clicked')
  this.acno = JSON.parse(localStorage.getItem('currentAcno')||'');
}

onCancel(){
  this.acno="";
}

}
