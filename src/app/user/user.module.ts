import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from './user.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        UsersComponent,
        AddUserComponent,
        ViewUserComponent,
        UpdateUserComponent
    ],
    exports: [
        UsersComponent,
        AddUserComponent,
        ViewUserComponent,
        UpdateUserComponent
    ],
    providers: [
        UserService
    ]
})
export class UserModule { }
