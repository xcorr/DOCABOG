import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';
import { NoauthGuard } from '../guards/noauth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginPage, canActivate : [NoauthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
