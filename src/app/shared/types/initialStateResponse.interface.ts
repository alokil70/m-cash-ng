import { OrdersInterface } from './orders.interface';
import { ProductsInterface } from './products.interface';
import { CategoryInterface } from './category.interface';

export interface InitialStateResponseInterface {
	orders: OrdersInterface[];
	products: ProductsInterface[];
	categories: CategoryInterface[];
}
