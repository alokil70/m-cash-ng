import { OrdersStateInterface } from '../types/ordersState.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { getOrdersAction, getOrdersFailureAction, getOrdersSuccessAction } from './actions/getOrders.action';

const initialState: OrdersStateInterface = {
	isLoading: false,
	error: null,
	data: null,
};

const ordersReducer = createReducer(
	initialState,
	on(getOrdersAction, (state) => ({
		...state,
		isLoading: true,
	})),
	on(getOrdersSuccessAction, (state, action) => ({
		...state,
		isLoading: false,
		data: action.orders,
	})),
	on(getOrdersFailureAction, (state) => ({
		...state,
		isLoading: false,
	})),
);

export function reducers(state: OrdersStateInterface, action: Action) {
	return ordersReducer(state, action);
}
