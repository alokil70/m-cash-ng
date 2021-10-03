import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { Store } from '@ngrx/store';
import { isSubmittingSelector, validationErrorsSelector } from '../../../auth/store/selectors';
import { loginCashAction } from 'src/app/auth-cash/store/actions/loginCash.action';
import { LoginCashRequestInterface } from 'src/app/auth-cash/types/loginCashRequest.interface';

@Component({
	selector: 'app-login-cash',
	templateUrl: './login-cash.component.html',
	styleUrls: ['./login-cash.component.scss'],
})
export class LoginCashComponent implements OnInit {
	formGroup: FormGroup;
	isSubmitting$: Observable<boolean>;
	backendErrors$: Observable<BackendErrorsInterface | null>;
	code = '';
	pass = '';
	codeFocus: boolean = true;

	constructor(private formBuilder: FormBuilder, private store: Store) {}

	ngOnInit(): void {
		this.initializeForm();
		this.initializeValues();
	}

	initializeValues(): void {
		this.isSubmitting$ = this.store.select(isSubmittingSelector);
		this.backendErrors$ = this.store.select(validationErrorsSelector);
	}

	initializeForm(): void {
		this.formGroup = this.formBuilder.group({
			code: [this.code],
			password: [this.pass],
		});
	}

	onFormSubmit(): void {
		const request: LoginCashRequestInterface = {
			user: this.formGroup.value,
		};
		if (!request.user.code) {
			request.user.code = this.code;
		}
		if (!request.user.password) {
			request.user.password = this.pass;
		}
		this.store.dispatch(loginCashAction({ request }));
	}

	keyEvent($event: string) {
		if (this.codeFocus) {
			this.code += $event;
			return;
		}
		this.pass += $event;
	}
}
