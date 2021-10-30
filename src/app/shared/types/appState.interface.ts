import { AuthStateInterface } from 'src/app/auth/types/authState.interface';
import { FeedStateInterface } from 'src/app/shared/modules/feed/types/feedState.interface';
import { OrdersStateInterface } from '../modules/cash/orders/types/ordersState.interface';
import { AuthCashStateInterface } from '../../auth-cash/types/authCashState.interface';

export interface AppStateInterface {
	auth: AuthStateInterface;
	authCash: AuthCashStateInterface;
	feed: FeedStateInterface;
	orders: OrdersStateInterface;
}
