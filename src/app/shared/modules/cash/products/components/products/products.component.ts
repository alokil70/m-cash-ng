import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { productsSelector, isLoadingSelector, errorSelector } from '../../store/selectors';
import { getProductsAction } from '../../store/actions/getProducts.action';
import { map, tap } from 'rxjs/operators';
import { ProductsInterface } from '../../../../../types/products.interface';
import { GetProductsResponseInterface } from '../../types/getProductsResponse.interface';
import { CategoryInterface } from '../../../../../types/category.interface';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
	@Input() apiUrl: string;

	isLoading$: Observable<boolean>;
	error$: Observable<string | null>;
	productsWithData$: Observable<GetProductsResponseInterface | null>;
	products$: Observable<any>;
	filteredItems: Observable<ProductsInterface[] | null>;
	categories: Observable<CategoryInterface[] | null>;

	constructor(private store: Store) {}

	ngOnInit(): void {
		this.fetchData();
		this.initializeValues();
		this.categoryList();
		this.filterData();
	}

	categoryList(): void {
		const i: Observable<ProductsInterface[]> = this.productsWithData$.pipe(map((i) => i.products));
		//this.categories = i.forEach((c) => c.category);
		/*this.categories = this.products$.pipe(
			map((item) => {
				const filtered = item.products;
				const category: CategoryInterface = item.products.forEach((i) => i.category);
				console.log('category filtered', category);
				return category;
			}),
		);*/
	}

	filterData(): void {
		this.products$ = this.productsWithData$.pipe(map((i) => i.products));
	}

	initializeValues(): void {
		this.isLoading$ = this.store.select(isLoadingSelector);
		this.error$ = this.store.select(errorSelector);
		this.productsWithData$ = this.store.select(productsSelector);
	}

	fetchData(): void {
		this.store.dispatch(getProductsAction({ url: this.apiUrl }));
	}

	itemClick(item: any) {
		console.log('click', item);
	}
}
