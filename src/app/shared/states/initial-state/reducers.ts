import { Action, createReducer, on } from '@ngrx/store';
import { initialStateAction } from './initial-state.action';
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
	/*on(getOrdersSuccessAction, (state, action) => ({
		...state,
		isLoading: false,
		data: action.orders,
	})),
	on(getOrdersFailureAction, (state) => ({
		...state,
		isLoading: false,
	})),*/
);

export function reducers(state: OrdersStateInterface, action: Action) {
	return initialStatesReducer(state, action);
}
