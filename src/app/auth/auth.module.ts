import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
//containers
import { AuthMainComponent } from './containers/auth-main/auth-main.component';
//components
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { AuthRememberComponent } from './components/auth-remember/auth-remember.component';
import { AuthMessageComponent } from './components/auth-message/auth-message.component';

const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: '',
        component: AuthMainComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    AuthFormComponent,
    AuthMainComponent,
    AuthRememberComponent,
    AuthMessageComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  exports: [],
})
export class AuthModule {}
