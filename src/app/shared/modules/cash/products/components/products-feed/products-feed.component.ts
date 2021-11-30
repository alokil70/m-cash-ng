import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { InitialState } from '../../../../../state/initial-state/initial.state';
import { OrdersInterface } from '../../../../../types/orders.interface';
import { ProductsInterface } from '../../../../../types/products.interface';
import { CategoryInterface } from '../../../../../types/category.interface';
import { Observable } from 'rxjs';
import { InitialStateResponseInterface } from '../../../../../types/initialStateResponse.interface';

@Component({
	selector: 'app-products-feed',
	templateUrl: './products-feed.component.html',
	styleUrls: ['./products-feed.component.scss'],
})
export class ProductsFeedComponent implements OnInit {
	orders: OrdersInterface[] = [];
	products: ProductsInterface[] = [];
	categories: CategoryInterface[] = [];
	cat = [];

	@Select(InitialState.getOrders) orders$: Observable<InitialStateResponseInterface> | undefined;
	@Select(InitialState.getProducts) products$: Observable<InitialStateResponseInterface> | undefined;
	@Select(InitialState.getCategories) categories$: Observable<InitialStateResponseInterface> | undefined;
	// orderss$: Observable<OrdersGet[]> = new OrdersGet[];
	// @Select(CategoriesState.entities<CategoryGet>()) categories$: Observable<CategoryGet[]> | undefined;

	constructor(private store: Store) {}

	ngOnInit(): void {
		this.initializeValues();
	}

	initializeValues() {
		this.orders$?.subscribe((res: InitialStateResponseInterface) => {
			this.orders = res.orders;
		});
		this.products$?.subscribe((res: InitialStateResponseInterface) => {
			this.products = res.products;
		});
		this.categories$?.subscribe((res: InitialStateResponseInterface) => {
			this.categories = res.categories;
			this.cat = res.categories;
		});
	}

	itemClick(item) {
		console.log(item);
		this.cat = this.products.filter((p) => p.category.id === item.id);
	}

	backToRoot() {
		this.cat = this.categories;
	}
}
