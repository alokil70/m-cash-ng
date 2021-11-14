import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { GetOrdersResponseInterface } from '../modules/cash/orders/types/getOrdersResponse.interface';

@Injectable()
export class InitialStatesService {
	constructor(private http: HttpClient) {}

	initialStates(url: string): Observable<GetOrdersResponseInterface> {
		const fullUrl = environment.apiUrl + url;
		return this.http.get<GetOrdersResponseInterface>(fullUrl);
	}
}
