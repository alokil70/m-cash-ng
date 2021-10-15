import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-cash-board',
	templateUrl: './cash-board.component.html',
	styleUrls: ['./cash-board.component.scss'],
})
export class CashBoardComponent implements OnInit {
	cards = [
		{
			id: 1,
			title: 'Создать заказ',
			background: 'green',
		},
		{
			id: 2,
			title: 'открытые заказы',
			background: 'green',
		},
		{
			id: 3,
			title: 'tgtgtgt3',
			background: 'blue',
		},
		{
			id: 4,
			title: 'hyhyhyhy4',
			background: 'blue',
		},
		{
			id: 5,
			title: 'hyhyhyhy5',
			background: 'green',
		},
		{
			id: 6,
			title: 'hyhyhyhy6',
			background: 'green',
		},
		{
			id: 7,
			title: 'hyhyhyhy7',
			background: 'green',
		},
		{
			id: 8,
			title: 'hyhyhyhy8',
			background: 'green',
		},
		{
			id: 9,
			title: 'hyhyhyhy9',
			background: 'green',
		},
		{
			id: 10,
			title: 'hyhyhyhy10',
			background: 'green',
		},
		{
			id: 11,
			title: 'hyhyhyhy11',
			background: 'green',
		},
		{
			id: 12,
			title: 'hyhyhyhy12',
			background: 'grey',
		},
		{
			id: 13,
			title: 'hyhyhyhy13',
			background: 'grey',
		},
		{
			id: 14,
			title: 'hyhyhyhy14',
			background: 'green',
		},
		{
			id: 15,
			title: 'hyhyhyhy15',
			background: 'blue',
		},
		{
			id: 16,
			title: 'hyhyhyhy16',
			background: 'red',
		},
	];
	cards1 = this.cards.slice(0, 6);
	cards2 = this.cards.slice(6, 9);
	cards3 = this.cards.slice(9, 12);
	cards4 = this.cards.slice(12, 16);
	block_header = 'Заголовок блока';
	constructor() {}

	ngOnInit(): void {}
}
