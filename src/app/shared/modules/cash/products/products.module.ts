import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsService } from './services/products.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { GetProductsEffect } from './store/effects/getProducts.effect';
import { CategoryPipe } from '../../../pipes/category.pipe';

@NgModule({
	declarations: [ProductItemComponent, ProductsComponent, CategoryPipe],
	imports: [
		CommonModule,
		EffectsModule.forFeature([GetProductsEffect]),
		StoreModule.forFeature('products', reducers),
	],
	exports: [ProductsComponent],
	providers: [ProductsService],
})
export class ProductsModule {}
