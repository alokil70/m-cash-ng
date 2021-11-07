import { ProductsInterface } from '../../../../types/products.interface';

export interface GetProductsResponseInterface {
	products: ProductsInterface[];
	productsCount: number;
}
