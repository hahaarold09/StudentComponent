import {  Component, OnInit ,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'printing',
  templateUrl: './printing.component.html',
  styleUrls: ['./printing.component.css']
})
export class PrintingComponent implements OnInit {

  print = false;

  constructor() { }
  ngOnInit() {
  }
  listStudent(): void{
     this.print = true;
  console.log('Showing stired students');
  
  }



  

}
