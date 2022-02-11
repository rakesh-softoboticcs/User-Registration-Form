import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageModuleRoutingModule } from './homepage-module-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GenderPipe } from './gender.pipe';



@NgModule({
  declarations: [
    HomepageComponent,
    GenderPipe
  ],
  imports: [
    CommonModule,
    HomepageModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  exports:[
    HomepageComponent,
    GenderPipe
  ]
})
export class HomepageModuleModule { }
