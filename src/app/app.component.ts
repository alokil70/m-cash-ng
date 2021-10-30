import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCurrentUserCashAction } from './auth-cash/store/actions/getCurrentUserCash.action';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	constructor(private store: Store) {}

	ngOnInit(): void {
		this.store.dispatch(getCurrentUserCashAction());
	}
}
