import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetProductsResponseInterface } from '../types/getProductsResponse.interface';

@Injectable()
export class ProductsService {
	constructor(private http: HttpClient) {}

	getProducts(url: string): Observable<GetProductsResponseInterface> {
		const fullUrl = environment.apiUrl + url;
		return this.http.get<GetProductsResponseInterface>(fullUrl);
	}
}
