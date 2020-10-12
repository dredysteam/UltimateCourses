import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-auth-main',
  templateUrl: './auth-main.component.html',
  styleUrls: ['./auth-main.component.css'],
})
export class AuthMainComponent implements OnInit {
  rememberMe: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  handleUser(event: User) {
    console.log('User recibido en Auth-Main Container', event);
    console.log(this.rememberMe);
  }

  rememberUser(event: boolean) {
    this.rememberMe = event;
  }
}
