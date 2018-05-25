import { UpdateUserComponent } from './user/update-user/update-user.component';
import { ViewUserComponent } from './user/view-user/view-user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { UsersComponent } from './user/users/users.component';
import { LoginComponent } from './auth/login/login.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
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
        children: [
            {
                path: ':id',
                component: ViewUserComponent
            },
            {
                path: 'new',
                component: AddUserComponent
            },
            {
                path: ':id/edit',
                component: UpdateUserComponent
            },
        ]
    },
    // If page not found then
    {
        path: '**',
        redirectTo: '/login'
    }
];
