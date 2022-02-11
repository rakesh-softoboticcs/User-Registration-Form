
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherComponentsRoutingModule } from './other-components-routing.module';
import { BdmComponent } from './bdm/bdm.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { NewdesignComponent } from './newdesign/newdesign.component';
import { ParentComponent } from './parent/parent.component';
import { TodosComponent } from './todos/todos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserTodosService } from '../services/user-todos.service';


@NgModule({
  declarations: [
    TodosComponent,
    NewdesignComponent,
    BdmComponent,
    ParentComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    CommonModule,
    OtherComponentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule

  ],
  exports:[
    TodosComponent,
    NewdesignComponent,
    BdmComponent,
    ParentComponent,
    Child1Component,
    Child2Component
  ],
  providers: [UserTodosService]
})
export class OtherComponentsModule { }
