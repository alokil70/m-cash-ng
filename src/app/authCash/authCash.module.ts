import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginCashComponent } from './components/login-cash/login-cash.component';
import { PersistanceService } from '../shared/services/persistance.service';
import { AuthCashService } from './services/authCash.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { GetCurrentUserEffect } from '../auth/store/effects/getCurrentUser.effect';
import { BackendErrorMessagesModule } from '../shared/modules/backendErrorMessages/backendErrorMessages.module';
import { LoginCashEffect } from './store/effects/loginCash.effect';
import { LoginCashKBDComponent } from './components/login-cash-kbd/login-cash-kbd.component';
import { LoginCashWrapperComponent } from './components/login-cash-wrapper/login-cash-wrapper.component';
import { LoginCashLogoComponent } from './components/login-cash-logo/login-cash-logo.component';

const routes = [
	{
		path: 'cash',
		component: LoginCashWrapperComponent,
	},
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		ReactiveFormsModule,
		StoreModule.forFeature('auth-cash', reducers),
		EffectsModule.forFeature([LoginCashEffect, GetCurrentUserEffect]),
		BackendErrorMessagesModule,
	],
	declarations: [LoginCashComponent, LoginCashKBDComponent, LoginCashWrapperComponent, LoginCashLogoComponent],
	providers: [PersistanceService, AuthCashService],
})
export class AuthCashModule {}
