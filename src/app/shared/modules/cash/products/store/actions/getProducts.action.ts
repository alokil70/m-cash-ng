import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { GetProductsResponseInterface } from '../../types/getProductsResponse.interface';

export const getProductsAction = createAction(ActionTypes.GET_PRODUCTS, props<{ url: string }>());
export const getProductsSuccessAction = createAction(
	ActionTypes.GET_PRODUCTS_SUCCESS,
	props<{ products: GetProductsResponseInterface }>(),
);
export const getProductsFailureAction = createAction(ActionTypes.GET_PRODUCTS_FAILURE);
