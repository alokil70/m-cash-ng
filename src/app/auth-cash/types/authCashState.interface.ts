import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { CurrentUserCashInterface } from '../../shared/types/currentUserCash.interface';

export interface AuthCashStateInterface {
	isSubmitting: boolean;
	currentUserCash: CurrentUserCashInterface | null;
	isLoggedIn: boolean | null;
	validationErrors: BackendErrorsInterface | null;
	isLoading: boolean;
}
