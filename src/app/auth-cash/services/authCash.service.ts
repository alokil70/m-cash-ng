import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { environment } from 'src/environments/environment';
import { LoginCashResponseInterface } from 'src/app/auth-cash/types/loginCashResponse.interface';
import { LoginCashRequestInterface } from 'src/app/auth-cash/types/loginCashRequest.interface';
import { RegisterRequestInterface } from '../../auth/types/registerRequest.interface';
import { CurrentUserCashInterface } from '../../shared/types/currentUserCash.interface';
import { AuthCashResponseInterface } from '../types/authCashResponse.interface';

@Injectable()
export class AuthCashService {
	constructor(private http: HttpClient) {}

	getUser(response: LoginCashResponseInterface): CurrentUserCashInterface {
		return response.user;
	}

	createUser(data: RegisterRequestInterface): Observable<CurrentUserCashInterface> {
		const url = environment.apiUrl + '/cash/reg';
		return this.http.post<AuthCashResponseInterface>(url, data).pipe(map(this.getUser));
	}

	login(data: LoginCashRequestInterface): Observable<CurrentUserCashInterface> {
		const url = environment.apiUrl + '/cash/login';
		return this.http.post<LoginCashResponseInterface>(url, data).pipe(map(this.getUser));
	}

	getCurrentUser(): Observable<CurrentUserCashInterface> {
		const url = environment.apiUrl + '/user';
		return this.http.get(url).pipe(map(this.getUser));
	}
}
