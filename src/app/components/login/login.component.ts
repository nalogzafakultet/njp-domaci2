import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Recept} from '../../model/recipe.model';
import {User} from '../../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private errorText = 'hehe';
  private user: User = new User('', '');

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (!this.user.username || !this.user.password) {
      this.errorText = 'Both username and password should be filled';
      return;
    }
    this.authService.login(this.user)
      .subscribe(res => {
        console.log('satro proslo');
        },
        (error: HttpErrorResponse) => {
          if (error.status === 200) {
            this.handleSuccess(error);
            this.router.navigate(['']);
          }
        });
    this.errorText = '';
  }

  private handleSuccess(error: HttpErrorResponse) {
    const token: string = error.error.text;
    localStorage.setItem('id_token', token);
    console.log('item set');
  }
}
