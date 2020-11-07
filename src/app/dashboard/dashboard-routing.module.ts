import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage, canActivate : [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
