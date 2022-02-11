import { Child2Component } from '../child2/child2.component';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
})
export class Child1Component implements OnInit {
  @Input() dataChild2:string="";

  @Output() messageDataChild1 = new EventEmitter<string>();


  ngOnInit(): void {
      
  }
  getValue(event:any)
  {
      let event1 = (event.target as HTMLInputElement).value;
      // console.log(event1);
      this.messageDataChild1.emit(event1)
      
  }
 
 

  
 



}
