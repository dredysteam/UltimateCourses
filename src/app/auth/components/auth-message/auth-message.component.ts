import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-message',
  templateUrl: './auth-message.component.html',
  styleUrls: ['./auth-message.component.css'],
})
export class AuthMessageComponent implements OnInit {
  days: number = 7;
  constructor() {}

  ngOnInit(): void {}
}
