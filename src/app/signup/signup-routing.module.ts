import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupPage } from './signup.page';
import { NoauthGuard } from '../guards/noauth.guard';

const routes: Routes = [
  {
    path: '',
    component: SignupPage, canActivate : [NoauthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupPageRoutingModule {}
