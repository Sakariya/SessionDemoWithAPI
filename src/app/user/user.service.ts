import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { User } from './user';
import { Collection } from './collection';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers(): Observable<Collection<User>>{
    return this.http
    .get(environment.apiUrl + '/users'
    )
    .catch(this.handleError);
  }

  getUserById(id: number): Observable<User> {
    return this.http.
      get(environment.apiUrl + '/users/' + id).
      catch(this.handleError);
  }

  saveUser(user: any): Observable<any> {
    return this.http.post(environment.apiUrl + '/users', {
      name: user.name,
      job: user.job
    }).
    catch(this.handleError);
  }

  private handleError(error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    return Observable.throw(error || 'Server error');
  }
}
