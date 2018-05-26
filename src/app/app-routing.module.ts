import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { ViewUserComponent } from './user/view-user/view-user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { UsersComponent } from './user/users/users.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthenticationGuard } from './authentication.guard';
import { UnAuthenticationGuard } from './un-authentication.guard';

const routes: Routes = [

  // Set root page of application
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'user/:id',
    component: ViewUserComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'add-user',
    component: AddUserComponent,
    canActivate: [AuthenticationGuard]
  },
  // If page not found then
  {
    path: '**',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
