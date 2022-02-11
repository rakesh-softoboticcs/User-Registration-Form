import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageauthGuard } from './homepageauth.guard';

import { LoginComponent } from './login/login.component';
import { RegisterSuccessComponent } from './register-success/register-success.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'register',
    component: RegistrationComponent,
    canActivate: [HomepageauthGuard],
  },
  {
    path: 'success-page',
    component: RegisterSuccessComponent,
    canActivate: [HomepageauthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [HomepageauthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterLoginRoutingModule {}
