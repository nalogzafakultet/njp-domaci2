import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  private loginText: string;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.loginText = this.auth.isAuthenticated() ? 'Logout' : 'Please Login';
  }

}
