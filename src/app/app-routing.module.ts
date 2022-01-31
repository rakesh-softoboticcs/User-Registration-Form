import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegisterSuccessComponent } from './register-success/register-success.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'success-page', component: RegisterSuccessComponent },
  { path: 'login', component: LoginComponent },
  { path: 'homepage', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  RegistrationComponent,
  RegisterSuccessComponent,
  LoginComponent,
  HomepageComponent,
];
