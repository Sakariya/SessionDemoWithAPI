import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorage } from '../token.storage';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {

    constructor(
        private http: HttpClient,
        private token: TokenStorage,
    ) { }

    public doLogin(email: string, password: string): Observable<any> {
        return this.http
            .post(environment.apiUrl + '/login',
                {
                    email: email,
                    password: password
                }
            )
            .map((response: Response) => {
                console.log('response -->>  ', response);
                this.token.saveToken(response['token']);
            })
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        return Observable.throw(error || 'Server error');
    }

}
