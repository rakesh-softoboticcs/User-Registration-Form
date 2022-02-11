

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BdmComponent } from './bdm/bdm.component';
import { NewdesignComponent } from './newdesign/newdesign.component';
import { ParentComponent } from './parent/parent.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {path:'bdm',component:BdmComponent},
  {path:'parent',component:ParentComponent},
  {path:'newdesign',component:NewdesignComponent},
  {path:'todos',component:TodosComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherComponentsRoutingModule { }
