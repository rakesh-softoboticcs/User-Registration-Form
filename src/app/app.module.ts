import { UserService } from './user.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GenderPipe } from './gender.pipe';
import { CookieService } from 'ngx-cookie-service';
import { TodosComponent } from './todos/todos.component';
import {HttpClientModule} from '@angular/common/http';
import { NewdesignComponent } from './newdesign/newdesign.component';
import { BdmComponent } from './bdm/bdm.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomepageComponent,
    routingComponents,
    GenderPipe,
    TodosComponent,
    NewdesignComponent,
    BdmComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, NgbModule,HttpClientModule],
  providers: [CookieService,UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
