import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { AuthModule } from './auth/auth.module';
import { GlobalFeedModule } from './globalFeed/globalFeed.module';
import { TopBarModule } from './shared/modules/topBar/topBar.module';
import { AuthInterceptor } from './shared/services/authinterceptor.service';
import { PersistanceService } from './shared/services/persistance.service';
import { AuthCashModule } from './authCash/authCash.module';
import { CashBoardModule } from './cash-board/cash-board.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AuthModule,
		AuthCashModule,
		HttpClientModule,
		RouterModule.forRoot([]),
		StoreModule.forRoot({ router: routerReducer }),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: environment.production,
		}),
		EffectsModule.forRoot([]),
		StoreRouterConnectingModule.forRoot(),
		CashBoardModule,
		TopBarModule,
		GlobalFeedModule,
	],
	providers: [
		PersistanceService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
