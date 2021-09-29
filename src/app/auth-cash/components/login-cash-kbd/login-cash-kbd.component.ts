import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-login-cash-kbd',
	templateUrl: './login-cash-kbd.component.html',
	styleUrls: ['./login-cash-kbd.component.scss'],
})
export class LoginCashKBDComponent implements OnInit {
	@Output() output = new EventEmitter();
	keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
	constructor() {}

	ngOnInit(): void {}

	keyPress(key) {
		this.output.emit(key);
	}
}
