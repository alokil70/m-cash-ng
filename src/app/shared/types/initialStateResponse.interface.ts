import { OrdersInterface } from './orders.interface';
import { ProductsInterface } from './products.interface';

export interface InitialStateResponseInterface {
	orders: {
		orders: OrdersInterface[];
		ordersCount: number;
	};
	products: {
		products: ProductsInterface[];
		productsCount: number;
	};
}
