import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsService } from './services/products.service';
import { CategoryPipe } from '../../../pipes/category.pipe';
import { ProductsFeedComponent } from './components/products-feed/products-feed.component';

@NgModule({
	declarations: [ProductItemComponent, ProductsComponent, CategoryPipe, ProductsFeedComponent],
	imports: [
		CommonModule,
		/*EffectsModule.forFeature([GetProductsEffect]),
		StoreModule.forFeature('products', reducers),*/
	],
	exports: [ProductsComponent, ProductsFeedComponent],
	providers: [ProductsService],
})
export class ProductsModule {}
