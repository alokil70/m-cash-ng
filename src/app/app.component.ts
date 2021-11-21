import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCurrentUserCashAction } from './auth-cash/store/actions/getCurrentUserCash.action';
import { Observable } from 'rxjs';
import { isLoggedInSelector } from './auth-cash/store/selectors';
import { initialStateAction } from './shared/states/initial-state/initial-state.action';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	isLoggedIn$: Observable<boolean>;

	constructor(private store: Store) {}

	ngOnInit(): void {
		this.isLoggedIn$ = this.store.select(isLoggedInSelector);
		this.store.dispatch(getCurrentUserCashAction());
		this.store.dispatch(initialStateAction({ url: '/initial-state' }));
	}
}
