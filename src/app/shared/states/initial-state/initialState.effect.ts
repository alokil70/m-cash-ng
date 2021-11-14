import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { initialStateAction } from './initial-state.action';
import { InitialStatesService } from '../../services/initial-states.service';
import { GetOrdersResponseInterface } from '../../modules/cash/orders/types/getOrdersResponse.interface';
import {
	getOrdersFailureAction,
	getOrdersSuccessAction,
} from '../../modules/cash/orders/store/actions/getOrders.action';

@Injectable()
export class InitialStateEffect {
	getStates$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(initialStateAction),
			switchMap((action) => {
				return this.statesService.initialStates('/initial-state').pipe(
					map((orders: GetOrdersResponseInterface) => {
						return getOrdersSuccessAction({ orders });
					}),
					catchError(() => {
						return of(getOrdersFailureAction());
					}),
				);
			}),
		);
	});

	constructor(private actions$: Actions, private statesService: InitialStatesService) {}
}
