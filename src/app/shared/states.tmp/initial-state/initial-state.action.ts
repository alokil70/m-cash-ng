import { createAction, props } from '@ngrx/store';
import { ActionTypes } from './actionTypes';

export const initialStateAction = createAction(ActionTypes.INITIAL_STATE, props<{ url: string }>());
export const initialStateSuccessAction = createAction(ActionTypes.INITIAL_STATE_SUCCESS, props<{ orders }>());
export const initialStateFailureAction = createAction(ActionTypes.INITIAL_STATE_FAILURE);
