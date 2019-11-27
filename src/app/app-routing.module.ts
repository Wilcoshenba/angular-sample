import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { AlwaysAuthGuard } from './checkuser'
const routes: Routes = [
  {
    path:'activate', component:UserListComponent, canActivate:[AlwaysAuthGuard]
  },
  {
    path:'appcomponent', component:UserListComponent, canActivate:[AlwaysAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
