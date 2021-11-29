import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { TopBarModule } from './shared/modules/topBar/topBar.module';
import { AuthInterceptor } from './shared/services/authinterceptor.service';
import { PersistanceService } from './shared/services/persistance.service';
import { AuthCashModule } from './auth-cash/auth-cash.module';
import { CashBoardModule } from './cash-board/cash-board.module';
import { GlobalOrdersModule } from './global-orders/global-orders.module';
import { GlobalCashModule } from './global-cash/global-cash.module';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { InitialState } from './shared/state/initial-state/initial.state';
import { InitialStateService } from './shared/services/initial-state.service';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AuthCashModule,
		HttpClientModule,
		RouterModule.forRoot([]),
		NgxsModule.forRoot([InitialState], {
			developmentMode: !environment.production,
		}),
		// NgxsLoggerPluginModule.forRoot(),
		NgxsReduxDevtoolsPluginModule.forRoot(),
		/*StoreModule.forRoot({ router: routerReducer }),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: environment.production,
		}),
		EffectsModule.forRoot([]),
		StoreRouterConnectingModule.forRoot(),*/
		CashBoardModule,
		GlobalCashModule,
		TopBarModule,
		GlobalOrdersModule,
	],
	providers: [
		InitialStateService,
		PersistanceService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
	exports: [],
})
export class AppModule {}
