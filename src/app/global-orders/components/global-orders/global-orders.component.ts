import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-global-orders',
	templateUrl: './global-orders.component.html',
	styleUrls: ['./global-orders.component.scss'],
})
export class GlobalOrdersComponent implements OnInit {
	apiUrl = '/orders';
	constructor() {}

	ngOnInit(): void {}
}
