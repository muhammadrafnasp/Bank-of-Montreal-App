import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user = '';

  constructor(private ds:DataService) {
    this.user=this.ds.currentUser
   }

  acno='';
  pswd='';
  amount='';

  
  acno1='';
  pswd1='';
  amount1='';




  ngOnInit(): void {
  }

  deposit(){
  // alert('clicked');
  let acno = this.acno;
  let pswd = this.pswd;
  let amount = this.amount;
  
  const result = this.ds.deposit(acno,pswd,amount)

  if(result){
    alert(`${amount} is credited...available balance is ${result}`)
  }
  }



  withdraw(){

    // alert('clicked');
    let acno = this.acno1;
    let pswd = this.pswd1;
    let amount = this.amount1;
    
    const result = this.ds.withdraw(acno,pswd,amount)

    if(result){
      alert(`${amount} is debited...available balance is ${result}`)
    }


  }


}
