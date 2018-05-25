import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationGuard } from './authentication.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TokenStorage } from './token.storage';
import { NgModule } from '@angular/core';

import { appRoutes } from './app.route';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AuthModule,
        UserModule,
        FormsModule,
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        AuthenticationGuard,
        TokenStorage
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
