import { createReducer, on, Action } from '@ngrx/store';
import { AuthCashStateInterface } from 'src/app/authCash/types/authCashState.interface';
import {
	loginCashAction,
	loginCashSuccessAction,
	loginCashFailureAction,
} from 'src/app/authCash/store/actions/loginCash.action';
import {
	getCurrentUserCashAction,
	getCurrentUserCashSuccessAction,
	getCurrentUserCashFailureAction,
} from 'src/app/authCash/store/actions/getCurrentUserCash.action';

const initialState: AuthCashStateInterface = {
	isSubmitting: false,
	isLoading: false,
	currentUserCash: null,
	validationErrors: null,
	isLoggedIn: null,
};

const authReducer = createReducer(
	initialState,
	on(
		loginCashAction,
		(state): AuthCashStateInterface => ({
			...state,
			isSubmitting: true,
			validationErrors: null,
		}),
	),
	on(
		loginCashSuccessAction,
		(state, action): AuthCashStateInterface => ({
			...state,
			isSubmitting: false,
			isLoggedIn: true,
			currentUserCash: action.currentUserCash,
		}),
	),
	on(
		loginCashFailureAction,
		(state, action): AuthCashStateInterface => ({
			...state,
			isSubmitting: false,
			validationErrors: action.errors,
		}),
	),
	on(
		getCurrentUserCashAction,
		(state): AuthCashStateInterface => ({
			...state,
			isLoading: true,
		}),
	),
	on(
		getCurrentUserCashSuccessAction,
		(state, action): AuthCashStateInterface => ({
			...state,
			isLoading: false,
			isLoggedIn: true,
			currentUserCash: action.currentUserCash,
		}),
	),
	on(
		getCurrentUserCashFailureAction,
		(state): AuthCashStateInterface => ({
			...state,
			isLoading: false,
			isLoggedIn: false,
			currentUserCash: null,
		}),
	),
);

export function reducers(state: AuthCashStateInterface, action: Action) {
	return authReducer(state, action);
}
