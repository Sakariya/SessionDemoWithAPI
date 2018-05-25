import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public email: string;
    public password: string;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() {
    }

    public doLogin() {
        this.authService.
            doLogin(this.email, this.password).
            subscribe(
                (response) => {
                    console.log('response ->> ', response);
                    // this.token.saveToken(response['token']);
                    this.router.navigate(['./users']);
                },
                (errorResponse) => {
                    alert('Error: ' + errorResponse);
                }
            );
    }

}
