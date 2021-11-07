import { ProductsStateInterface } from '../types/productsState.interface';
import { Action, createReducer, on } from '@ngrx/store';
import {
	getProductsAction,
	getProductsSuccessAction,
	getProductsFailureAction,
} from './actions/getProducts.action';

const initialState: ProductsStateInterface = {
	isLoading: false,
	error: null,
	data: null,
};

const productsReducer = createReducer(
	initialState,
	on(getProductsAction, (state) => ({
		...state,
		isLoading: true,
	})),
	on(getProductsSuccessAction, (state, action) => ({
		...state,
		isLoading: false,
		data: action.products,
	})),
	on(getProductsFailureAction, (state) => ({
		...state,
		isLoading: false,
	})),
);

export function reducers(state: ProductsStateInterface, action: Action) {
	return productsReducer(state, action);
}
