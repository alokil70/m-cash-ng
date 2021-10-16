import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-orders-item',
	templateUrl: './orders-item.component.html',
	styleUrls: ['./orders-item.component.scss'],
})
export class OrdersItemComponent implements OnInit {
	@Input() card_props;

	constructor() {}

	ngOnInit(): void {}
}
