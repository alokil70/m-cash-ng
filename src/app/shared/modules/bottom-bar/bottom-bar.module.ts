import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';

@NgModule({
	declarations: [BottomBarComponent],
	imports: [CommonModule],
	exports: [BottomBarComponent],
})
export class BottomBarModule {}
