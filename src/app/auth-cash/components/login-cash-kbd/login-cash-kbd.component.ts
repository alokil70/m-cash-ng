import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { of } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Component({
	selector: 'app-login-cash-kbd',
	templateUrl: './login-cash-kbd.component.html',
	styleUrls: ['./login-cash-kbd.component.scss'],
})
export class LoginCashKBDComponent implements OnInit {
	@Output() output = new EventEmitter();
	keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
	constructor() {}

	ngOnInit(): void {}

	keyPress(key: string) {
		of(key)
			.pipe(tap(console.log))
			.subscribe((i) => this.output.emit(i));
	}
}
