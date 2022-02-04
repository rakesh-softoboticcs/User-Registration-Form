import { BdmComponent } from './bdm/bdm.component';
import { NewdesignComponent } from './newdesign/newdesign.component';
import { TodosComponent } from './todos/todos.component';
import { HomepageauthGuard } from './homepageauth.guard';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegisterSuccessComponent } from './register-success/register-success.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: BdmComponent },
  { path: 'register', component: RegistrationComponent,canActivate:[HomepageauthGuard] },
  { path: 'success-page', component: RegisterSuccessComponent,canActivate:[HomepageauthGuard] },
  { path: 'login', component: LoginComponent,canActivate:[HomepageauthGuard]},
  { path: 'homepage', component: HomepageComponent,canActivate:[AuthGuard] },
  {path:'userTodos',component:TodosComponent}
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
  TodosComponent,
  NewdesignComponent
];
