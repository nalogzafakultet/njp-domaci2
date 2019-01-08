import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  loginText() {
    if (this.auth.isAuthenticated()) {
      return 'Logout';
    } else {
      return 'Please Login';
    }
  }


  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
