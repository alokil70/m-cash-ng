import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getOrdersAction } from '../../store/actions/getOrders.action';
import { Observable } from 'rxjs';
import { GetOrdersResponseInterface } from '../../types/getOrdersResponse.interface';
import { errorSelector, isLoadingSelector, ordersSelector } from '../../store/selectors';

@Component({
	selector: 'app-orders',
	templateUrl: './orders.component.html',
	styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
	@Input() apiUrl: string;

	isLoading$: Observable<boolean>;
	error$: Observable<string | null>;
	orders$: Observable<GetOrdersResponseInterface | null>;

	constructor(private store: Store) {}

	ngOnInit(): void {
		this.initializeValues();
		this.fetchData();
	}

	initializeValues(): void {
		this.isLoading$ = this.store.select(isLoadingSelector);
		this.error$ = this.store.select(errorSelector);
		this.orders$ = this.store.select(ordersSelector);
	}

	fetchData(): void {
		this.store.dispatch(getOrdersAction({ url: this.apiUrl }));
	}
}
