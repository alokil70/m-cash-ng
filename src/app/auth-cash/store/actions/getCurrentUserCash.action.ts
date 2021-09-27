import { createAction, props } from '@ngrx/store';
import { ActionTypes } from 'src/app/auth-cash/store/actionTypes';
import { CurrentUserCashInterface } from 'src/app/shared/types/currentUserCash.interface';

export const getCurrentUserCashAction = createAction(ActionTypes.GET_CURRENT_USER_CASH);

export const getCurrentUserCashSuccessAction = createAction(
	ActionTypes.GET_CURRENT_USER_CASH_SUCCESS,
	props<{ currentUserCash: CurrentUserCashInterface }>(),
);

export const getCurrentUserCashFailureAction = createAction(ActionTypes.GET_CURRENT_USER_CASH_FAILURE);
