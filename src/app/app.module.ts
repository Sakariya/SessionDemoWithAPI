import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationGuard } from './authentication.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component';
import { TokenStorage } from './token.storage';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

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
        AppRoutingModule
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
