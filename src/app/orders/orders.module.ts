import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './components/orders/orders.component';
import { RouterModule } from '@angular/router';
import { OrdersItemModule } from '../shared/modules/cash/orders/orders-item/orders-item.module';

const routes = [
	{
		path: 'cash/orders2',
		component: OrdersComponent,
	},
];
@NgModule({
	declarations: [OrdersComponent],
	imports: [CommonModule, RouterModule.forChild(routes), OrdersItemModule],
	exports: [OrdersComponent],
})
export class OrdersModule {}
