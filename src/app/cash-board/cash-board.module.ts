import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashBoardComponent } from './components/cash-board/cash-board.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../auth-cash/store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { BoardItemComponent } from './components/board-item/board-item.component';

const routes = [
	{
		path: 'cash/board',
		component: CashBoardComponent,
	},
];

@NgModule({
	declarations: [CashBoardComponent, BoardItemComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		StoreModule.forFeature('cash-board', reducers),
		EffectsModule.forFeature([]),
	],
})
export class CashBoardModule {}
