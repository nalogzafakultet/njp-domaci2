import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import {AUTH_LOGIN} from '../api/api.routes';
import {User} from '../model/user.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private httpHeaders: HttpHeaders;

  constructor(private http: HttpClient) { }

  login(user: User) {
    console.log(JSON.stringify(user));
    const httpOptions = { headers: this.httpHeaders};
    return this.http.post(AUTH_LOGIN, {username: user.username, password: user.password});
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('id_token');
    return !!token;
  }

}
