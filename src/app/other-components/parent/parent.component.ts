
import {  ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  {
  messageChild2:string="";
  messageChild1:string="";
  


  constructor(private cdr:ChangeDetectorRef) { }

  recieveDataChild2(event:any)
  {
    // console.log(event);
    
      this.messageChild2=event;
      
  }
  recieveDataChild1(event:any)
  {
     console.log(event);
     this.messageChild1=event
  }

  

}
