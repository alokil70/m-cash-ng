import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-global-cash',
	templateUrl: './global-cash.component.html',
	styleUrls: ['./global-cash.component.scss'],
})
export class GlobalCashComponent implements OnInit {
	apiUrl = '/products';
	constructor() {}

	ngOnInit(): void {}
}
