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
    // this.user=this.ds.currentUser,
    if(localStorage.getItem('currentUser')){
      this.user=JSON.parse(localStorage.getItem('currentUser')||'');

    }
    this.sdate=new Date();
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
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],//array
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  amount:['',[Validators.required,Validators.pattern('[0-9]*')]]


})


  ngOnInit(): void {
    if(!localStorage.getItem('currentUser')){
      alert('Please login first');
      this.router.navigateByUrl('');
    }

    // console.log(this.user);
    
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
    let acno = this.withdrawForm.value.acno;
    let pswd = this.withdrawForm.value.pswd;
    let amount = this.withdrawForm.value.amount;
    
    if(this.withdrawForm.valid){
      this.ds.withdraw(acno,pswd,amount)
    
      .subscribe((result:any)=>{
        alert(result.message)
    
      },
      result=>{
        alert(result.error.message)
      })
    
      }

  }


  logout(){
  // alert('clicked');
  // remove currentAcno and currentUser from localStorage
  localStorage.removeItem('currentAcno');
  localStorage.removeItem('currentUser');
  localStorage.removeItem('token');
  this.router.navigateByUrl('');
  }

delete(){
  // alert('clicked')
  this.acno = JSON.parse(localStorage.getItem('currentAcno')||'');
}

onCancel(){
  this.acno="";
}

onDelete(event:any){
  //  alert(event) //1000
  this.ds.deleteAcc(event)
  .subscribe((result:any)=>{
    alert(result.message) //user deleted
    // this.router.navigateByUrl('');
    this.logout();
  },
  result=>{
    alert(result.error.message)
  })
}

}
