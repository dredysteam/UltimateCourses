import {
  Component,
  Output,
  EventEmitter,
  ContentChild,
  ContentChildren,
  QueryList,
  ViewChild,
  AfterViewInit,
  AfterContentInit,
  ViewChildren,
  ChangeDetectorRef,
  ElementRef,
} from '@angular/core';
import { User } from '../../models/user.interface';
import { Router } from '@angular/router';

// We need acces to this component after your content init
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';
import { AuthMessageComponent } from '../auth-message/auth-message.component';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
  showMessage: boolean;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  @ContentChild(AuthRememberComponent) remember: AuthRememberComponent;

  // @ContentChildren(AuthRememberComponent) remember: QueryList<
  //   AuthRememberComponent
  // >;

  @ViewChild(AuthMessageComponent) message: AuthMessageComponent;

  // @ViewChildren(AuthMessageComponent) message: QueryList<AuthMessageComponent>;

  @ViewChild('username') username: ElementRef;

  constructor(private router: Router, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    if (this.message) {
      this.message.days = 25;
    }
    this.cd.detectChanges();

    this.username.nativeElement.setAttribute(
      'placeholder',
      'Enter your username'
    );

    this.username.nativeElement.classList.add('email');
    this.username.nativeElement.focus();
  }

  // ngAfterViewInit() {
  //   if (this.message) {
  //     setTimeout(() => {
  //       this.message.forEach((message) => {
  //         message.days = 25;
  //       });
  //     });
  //   }
  // }

  ngAfterContentInit() {
    if (this.remember) {
      this.remember.checked.subscribe((checked: boolean) => {
        this.showMessage = checked;
      });
    }
  }

  // ngAfterContentInit() {
  //   if (this.remember) {
  //     this.remember.forEach((item) => {
  //       item.checked.subscribe(
  //         (checked: boolean) => (this.showMessage = checked)
  //       );
  //     });
  //   }
  // }

  handleSubmit(user: User, isValid: boolean) {
    if (isValid) {
      console.log('User enviado en Auth-Form Component', user);
      this.submitted.emit(user);
      this.router.navigate(['passengers']);
    }
  }
}
