import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalCashComponent } from './components/global-cash/global-cash.component';
import { RouterModule } from '@angular/router';
import { ProductsModule } from '../shared/modules/cash/products/products.module';
import { OrderListComponent } from '../shared/modules/cash/order-list/order-list.component';
import { OrderCartComponent } from '../shared/modules/cash/order-cart/order-cart.component';
import { TopBarModule } from '../shared/modules/topBar/topBar.module';
import { BottomBarModule } from '../shared/modules/bottom-bar/bottom-bar.module';

const routes = [
	{
		path: 'cash/order',
		component: GlobalCashComponent,
	},
];

@NgModule({
	declarations: [GlobalCashComponent, OrderListComponent, OrderCartComponent],
	imports: [CommonModule, ProductsModule, TopBarModule, BottomBarModule, RouterModule.forChild(routes)],
})
export class GlobalCashModule {}
