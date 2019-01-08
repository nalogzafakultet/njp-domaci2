import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private username = '';
  private password = '';
  private errorText = '';

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  register() {
    if (!this.username || !this.password) {
      this.errorText = 'Popuni sva polja bro';
      return;
    }

    this.auth.register(this.username, this.password)
      .subscribe(res => {
        console.log(res);
          this.router.navigate(['/login']);
        },
          error => console.log(error));
    console.log('success register');
    this.errorText = '';
  }
}
