import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersItemComponent } from './components/orders-item/orders-item.component';

@NgModule({
	declarations: [OrdersItemComponent],
	imports: [CommonModule],
	exports: [OrdersItemComponent],
})
export class OrdersItemModule {}
