import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { BackendErrorMessagesModule } from '../shared/modules/backendErrorMessages/backendErrorMessages.module';
import { PersistanceService } from '../shared/services/persistance.service';
import { LoginComponent } from './components/login/login.component';

const routes = [
	{
		path: 'register',
		component: RegisterComponent,
	},
	{
		path: 'login',
		component: LoginComponent,
	},
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		ReactiveFormsModule,
		/*StoreModule.forFeature('auth', reducers),
		EffectsModule.forFeature([RegisterEffect, LoginEffect, GetCurrentUserEffect]),*/
		BackendErrorMessagesModule,
	],
	declarations: [RegisterComponent, LoginComponent],
	providers: [AuthService, PersistanceService],
})
export class AuthModule {}
