import { createAction, props } from '@ngrx/store';
import { ActionTypes } from 'src/app/authCash/store/actionTypes';
import { LoginCashRequestInterface } from 'src/app/authCash/types/loginCashRequest.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { CurrentUserCashInterface } from 'src/app/shared/types/currentUserCash.interface';

export const loginCashAction = createAction(
	ActionTypes.LOGIN_CASH,
	props<{ request: LoginCashRequestInterface }>(),
);

export const loginCashSuccessAction = createAction(
	ActionTypes.LOGIN_CASH_SUCCESS,
	props<{ currentUserCash: CurrentUserCashInterface }>(),
);

export const loginCashFailureAction = createAction(
	ActionTypes.LOGIN_CASH_FAILURE,
	props<{ errors: BackendErrorsInterface }>(),
);
