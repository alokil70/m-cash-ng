import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardItemComponent } from './components/board-item/board-item.component';

@NgModule({
	declarations: [BoardItemComponent],
	imports: [CommonModule],
	exports: [BoardItemComponent],
})
export class BoardItemModule {}
