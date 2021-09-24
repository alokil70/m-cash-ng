import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginCashComponent } from './components/login-cash/login-cash.component';

const routes = [
  {
    path: 'loginCash',
    component: LoginCashComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
  declarations: [LoginCashComponent],
  providers: [],
})
export class AuthCashModule {}
