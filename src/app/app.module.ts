import { HomepageModuleModule } from './homepage-module/homepage-module.module';
import { UserService } from './services/user.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './register-login/registration/registration.component';
import { LoginComponent } from './register-login/login/login.component';
import { HomepageComponent } from './homepage-module/homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import {HttpClientModule} from '@angular/common/http';

import { OtherComponentsModule } from './other-components/other-components.module';
import { RegisterLoginModule } from './register-login/register-login.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, NgbModule,HttpClientModule,FormsModule,RegisterLoginModule, OtherComponentsModule,HomepageModuleModule],
  providers: [CookieService,UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
