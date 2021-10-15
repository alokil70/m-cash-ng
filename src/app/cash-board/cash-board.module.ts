import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashBoardComponent } from './components/cash-board/cash-board.component';
import { RouterModule } from '@angular/router';
import { BoardItemModule } from '../shared/modules/cash/board/board-item/board-item.module';

const routes = [
	{
		path: 'cash/board',
		component: CashBoardComponent,
	},
];

@NgModule({
	declarations: [CashBoardComponent],
	imports: [CommonModule, RouterModule.forChild(routes), BoardItemModule],
})
export class CashBoardModule {}
