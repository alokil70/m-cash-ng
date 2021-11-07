import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
	getProductsAction,
	getProductsSuccessAction,
	getProductsFailureAction,
} from '../actions/getProducts.action';
import { ProductsService } from '../../services/products.service';
import { GetProductsResponseInterface } from '../../types/getProductsResponse.interface';

@Injectable()
export class GetProductsEffect {
	getProducts$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(getProductsAction),
			switchMap(({ url }) => {
				return this.productsService.getProducts(url).pipe(
					map((products: GetProductsResponseInterface) => {
						return getProductsSuccessAction({ products });
					}),
					catchError(() => {
						return of(getProductsFailureAction());
					}),
				);
			}),
		);
	});

	constructor(private actions$: Actions, private productsService: ProductsService) {}
}
