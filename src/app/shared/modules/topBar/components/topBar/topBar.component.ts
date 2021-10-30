import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { isLoggedInSelector, isAnonymousSelector, currentUserSelector } from 'src/app/auth-cash/store/selectors';
import { CurrentUserCashInterface } from '../../../../types/currentUserCash.interface';

@Component({
	selector: 'app-top-bar',
	templateUrl: './topBar.component.html',
	styleUrls: ['./topBar.component.scss'],
})
export class TopBarComponent implements OnInit {
	isLoggedIn$: Observable<boolean>;
	isAnonymous$: Observable<boolean>;
	currentUser$: Observable<CurrentUserCashInterface | null>;

	constructor(private store: Store) {}

	ngOnInit(): void {
		this.isLoggedIn$ = this.store.select(isLoggedInSelector);
		this.isAnonymous$ = this.store.select(isAnonymousSelector);
		this.currentUser$ = this.store.select(currentUserSelector);
	}
}
