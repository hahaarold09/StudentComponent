import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-printing',
  templateUrl: './printing.component.html',
  styleUrls: ['./printing.component.css']
})
export class PrintingComponent implements OnInit {

  received = false;

  constructor() { }

  ngOnInit() {
  }
  printing(){
     this.received = true;
  console.log('Showing stired students');
  }

}
