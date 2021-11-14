import { createAction } from '@ngrx/store';
import { ActionTypes } from './actionTypes';

export const initialStateAction = createAction(ActionTypes.INITIAL_STATE);
