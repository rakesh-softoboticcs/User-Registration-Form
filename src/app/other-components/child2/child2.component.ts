import { Component,  Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { LineAndCharacter } from 'typescript';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component  {
  @Output() messageDataChild2 = new EventEmitter<string>();
  @Input() dataChild1:string="";

  constructor() { }
  getValue(event:any)
  {
    let event1 = (event.target as HTMLInputElement).value
    // console.log(event1);
    
    this.messageDataChild2.emit(event1);
  }

  

}
