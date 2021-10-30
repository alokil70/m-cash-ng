import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { AuthCashService } from 'src/app/auth-cash/services/authCash.service';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import {
	getCurrentUserCashAction,
	getCurrentUserCashFailureAction,
	getCurrentUserCashSuccessAction,
} from '../actions/getCurrentUserCash.action';
import { CurrentUserCashInterface } from '../../../shared/types/currentUserCash.interface';

@Injectable()
export class GetCurrentUserCashEffect {
	getCurrentUserCash$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(getCurrentUserCashAction),
			switchMap(() => {
				const token = this.persistanceService.get('accessToken');

				if (!token) {
					return of(getCurrentUserCashFailureAction());
				}

				return this.authCashService.getCurrentUser().pipe(
					map((currentUserCash: CurrentUserCashInterface) => {
						return getCurrentUserCashSuccessAction({ currentUserCash });
					}),

					catchError(() => {
						return of(getCurrentUserCashFailureAction());
					}),
				);
			}),
		);
	});

	constructor(
		private actions$: Actions,
		private authCashService: AuthCashService,
		private persistanceService: PersistanceService,
	) {}
}
