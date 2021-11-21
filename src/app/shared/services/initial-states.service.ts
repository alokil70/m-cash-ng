import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { InitialStateResponseInterface } from '../types/initialStateResponse.interface';

@Injectable()
export class InitialStatesService {
	constructor(private http: HttpClient) {}

	initialStates(url: string): Observable<InitialStateResponseInterface> {
		const fullUrl = environment.apiUrl + url;
		return this.http.get<InitialStateResponseInterface>(fullUrl);
	}
}
