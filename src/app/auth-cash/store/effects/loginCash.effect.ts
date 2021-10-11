import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { AuthCashService } from 'src/app/auth-cash/services/authCash.service';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import {
	loginCashAction,
	loginCashSuccessAction,
	loginCashFailureAction,
} from 'src/app/auth-cash/store/actions/loginCash.action';
import { CurrentUserCashInterface } from 'src/app/shared/types/currentUserCash.interface';

@Injectable()
export class LoginCashEffect {
	login$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(loginCashAction),
			switchMap(({ request }) => {
				return this.authCashService.login(request).pipe(
					map((currentUserCash: CurrentUserCashInterface) => {
						this.persistanceService.set('accessToken', currentUserCash.token);
						return loginCashSuccessAction({ currentUserCash });
					}),

					catchError((errorResponse: HttpErrorResponse) => {
						return of(loginCashFailureAction({ errors: errorResponse.error.errors }));
					}),
				);
			}),
		);
	});

	redirectAfterSubmit$ = createEffect(
		() => {
			return this.actions$.pipe(
				ofType(loginCashSuccessAction),
				tap(() => {
					this.router.navigateByUrl('/cash/board');
				}),
			);
		},
		{ dispatch: false },
	);

	constructor(
		private actions$: Actions,
		private authCashService: AuthCashService,
		private persistanceService: PersistanceService,
		private router: Router,
	) {}
}
