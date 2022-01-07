import { Action, createReducer, on } from '@ngrx/store';
import { initialStateAction, initialStateFailureAction, initialStateSuccessAction } from './initial-state.action';
import { OrdersStateInterface } from '../../modules/cash/orders/types/ordersState.interface';

const initialState: OrdersStateInterface = {
	isLoading: false,
	error: null,
	data: null,
};

const initialStatesReducer = createReducer(
	initialState,
	on(initialStateAction, (state) => ({
		...state,
		isLoading: true,
	})),
	on(initialStateSuccessAction, (state, action) => ({
		...state,
		isLoading: false,
		data: action.orders,
	})),
	on(initialStateFailureAction, (state) => ({
		...state,
		isLoading: false,
	})),
);

export function reducers(state: OrdersStateInterface, action: Action) {
	return initialStatesReducer(state, action);
}
