import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [{ path: 'homepage', component: HomepageComponent,canActivate:[AuthGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageModuleRoutingModule { }
