import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
   // @input() used to hold data from the parent component
  @Input () item:string|undefined;

@Output() onCancel = new EventEmitter();

@Output() onDelete = new EventEmitter();


// Oncancel - userDefined event 
  constructor() { }

  ngOnInit(): void {
  }
  cancel(){
    this.onCancel.emit();
  }

  delete(){
    this.onDelete.emit(this.item);

  }

}

// function output() {
//   throw new Error('Function not implemented.');
// }

