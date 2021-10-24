import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './components/orders/orders.component';
import { EffectsModule } from '@ngrx/effects';
import { GetOrdersEffect } from './store/effects/getOrders.effect';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { OrdersService } from './services/orders.service';

@NgModule({
	declarations: [OrdersComponent],
	imports: [CommonModule, EffectsModule.forFeature([GetOrdersEffect]), StoreModule.forFeature('orders', reducers)],
	exports: [OrdersComponent],
	providers: [OrdersService],
})
export class OrdersModule {}
