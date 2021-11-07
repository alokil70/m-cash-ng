import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { ProductsStateInterface } from '../types/productsState.interface';

export const productsFeatureSelector = createFeatureSelector<AppStateInterface, ProductsStateInterface>(
	'products',
);

export const isLoadingSelector = createSelector(
	productsFeatureSelector,
	(productsState: ProductsStateInterface) => productsState.isLoading,
);

export const errorSelector = createSelector(
	productsFeatureSelector,
	(productsState: ProductsStateInterface) => productsState.error,
);

export const productsSelector = createSelector(
	productsFeatureSelector,
	(productsState: ProductsStateInterface) => productsState.data,
);
