import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialStateService } from '../services/initial-state.service';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		/*EffectsModule.forFeature([InitialStateEffect]),
		StoreModule.forFeature('initialStates', reducers),*/
	],
	providers: [InitialStateService],
})
export class StatesModule {}
