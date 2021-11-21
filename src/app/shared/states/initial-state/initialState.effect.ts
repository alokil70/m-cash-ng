import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, switchMap, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { initialStateAction } from './initial-state.action';
import { InitialStatesService } from '../../services/initial-states.service';
import {
	getOrdersFailureAction,
	getOrdersSuccessAction,
} from '../../modules/cash/orders/store/actions/getOrders.action';
import { InitialStateResponseInterface } from '../../types/initialStateResponse.interface';
import { getProductsSuccessAction } from '../../modules/cash/products/store/actions/getProducts.action';

@Injectable()
export class InitialStateEffect {
	getStates$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(initialStateAction),
			switchMap(({ url }) => {
				return this.statesService.initialStates(url).pipe(
					mergeMap((res: InitialStateResponseInterface) => {
						return [
							getOrdersSuccessAction({ orders: res.orders }),
							getProductsSuccessAction({ products: res.products }),
						];
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
