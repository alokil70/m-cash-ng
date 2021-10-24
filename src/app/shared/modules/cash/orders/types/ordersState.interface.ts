import { GetOrdersResponseInterface } from './getOrdersResponse.interface';

export interface OrdersStateInterface {
	isLoading: boolean;
	error: string | null;
	data: GetOrdersResponseInterface | null;
}
