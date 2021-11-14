import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { InitialStateEffect } from './initial-state/initialState.effect';
import { reducers } from './initial-state/reducers';
import { InitialStatesService } from '../services/initial-states.service';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		EffectsModule.forFeature([InitialStateEffect]),
		StoreModule.forFeature('initialStates', reducers),
	],
	providers: [InitialStatesService],
})
export class StatesModule {}
