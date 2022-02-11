
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  
  
  
  { path: 'register-login', loadChildren: () => import('./register-login/register-login.module').then(m => m.RegisterLoginModule) },
  { path: 'other-components', loadChildren: () => import('./other-components/other-components.module').then(m => m.OtherComponentsModule) },
  
  { path: 'homepage-module', loadChildren: () => import('./homepage-module/homepage-module.module').then(m => m.HomepageModuleModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

