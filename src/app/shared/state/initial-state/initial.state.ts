import { Injectable } from '@angular/core';
import { Action, createSelector, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';
import { InitialStateService } from '../../services/initial-state.service';
import { InitialStateResponseInterface } from '../../types/initialStateResponse.interface';
import { GetInitialState } from './initial-state.action';

/*export class EntitiesState {
	static entities<T>() {
		return createSelector([this], (state: { entities: T[] }) => {
			console.log('state', state.entities);

			return state.entities;
		});
	}
	//...
}

export interface CategoriesStateModel {
	entities: CategoryGet[];
}

@State<CategoriesStateModel>({
	name: 'categories',
	defaults: {
		entities: [],
	},
})
@Injectable()
export class CategoriesState extends EntitiesState {
	//...
}*/

/*export interface InitialStateInterface {
	orders: OrdersGet[];
	products: ProductsGet[];
	categories: CategoryGet[];
}*/

@State<InitialStateResponseInterface>({
	name: 'initialState',
	defaults: {
		orders: [],
		products: [],
		categories: [],
	},
})
@Injectable()
export class InitialState {
	constructor(private initialStateService: InitialStateService) {}

	@Selector()
	static getOrders(state: InitialStateResponseInterface) {
		return state.orders;
	}

	@Selector()
	static getProducts(state: InitialStateResponseInterface) {
		return state.products;
	}

	@Selector()
	static getCategories(state: InitialStateResponseInterface) {
		return state.categories;
	}

	@Action(GetInitialState)
	getInitialState(ctx: StateContext<InitialStateResponseInterface>) {
		return this.initialStateService.getInitialState('/initial-state').pipe(
			tap((res: InitialStateResponseInterface) => {
				const state = ctx.getState();
				ctx.setState({
					...state,
					orders: res.orders,
					products: res.products,
					categories: res.categories,
				});
			}),
		);
	}
}
