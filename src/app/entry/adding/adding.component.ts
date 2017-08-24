import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.css']
})
export class AddingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  studentCollection: Array<object> = [];
  studentRecord: object;

  studNo: number;
  studFName: string;
  studLName: string;
  studProg: string;
  studYear: number;

  messages = '';
  printing = false;
  private checkPatterns (value:any, pattern: RegExp): boolean {

    if(pattern.test(value))
      return true;
    
    else
      return false;
    
  }

 addStudentEntry(): Boolean{

    this.printing = false;
    const stringPattern = /^[A-z\s]+$/;
    const studNumberPattern = /^[0-9]+$/;
    const studYearPattern = /^[1-5]+$/;

    if  (this.checkPatterns(this.studNo, studNumberPattern)
      && this.checkPatterns(this.studFName, stringPattern)
      && this.checkPatterns(this.studLName,stringPattern)
      && this.checkPatterns(this.studProg, stringPattern) 
      && this.checkPatterns(this.studYear,studYearPattern)) {

            this.studentRecord = {  
                studNumber: this.studNo,
                studFirstName: this.studFName,
                studFLastName: this.studLName,
                studProgram: this.studProg,
                studYear: this.studYear
    
            };
             this.studentCollection.push(this.studentRecord);
             this.messages = null;
             this.clearValues();
          }
            else{
              this.messages = 'Errors have been encountered and therefore cannot continue to process requested operation.';
              return false;
            }
  }
 clearValues(): void {
  this.studNo = null;
  this.studFName = null;
  this.studLName = null;
  this.studProg = null;
  this.studYear = null;
  }
}
