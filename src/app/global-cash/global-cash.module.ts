import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalCashComponent } from './components/global-cash/global-cash.component';
import { RouterModule } from '@angular/router';
import { ProductsModule } from '../shared/modules/cash/products/products.module';
import { OrderListComponent } from '../shared/modules/cash/order-list/order-list.component';

const routes = [
	{
		path: 'cash/order',
		component: GlobalCashComponent,
	},
];

@NgModule({
	declarations: [GlobalCashComponent, OrderListComponent],
	imports: [CommonModule, ProductsModule, RouterModule.forChild(routes)],
})
export class GlobalCashModule {}
