import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GlobalOrdersComponent } from './components/global-orders/global-orders.component';
import { OrdersModule } from '../shared/modules/cash/orders/orders.module';

const routes = [
	{
		path: 'cash/orders',
		component: GlobalOrdersComponent,
	},
];

@NgModule({
	declarations: [GlobalOrdersComponent],
	imports: [CommonModule, OrdersModule, RouterModule.forChild(routes)],
})
export class GlobalOrdersModule {}
