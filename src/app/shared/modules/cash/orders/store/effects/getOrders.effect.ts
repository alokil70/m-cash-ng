import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { OrdersService } from '../../services/orders.service';
import { getOrdersAction, getOrdersFailureAction, getOrdersSuccessAction } from '../actions/getOrders.action';
import { GetOrdersResponseInterface } from '../../types/getOrdersResponse.interface';

@Injectable()
export class GetOrdersEffect {
	getOrders$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(getOrdersAction),
			switchMap(({ url }) => {
				return this.ordersService.getOrders(url).pipe(
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

	constructor(private actions$: Actions, private ordersService: OrdersService) {}
}
