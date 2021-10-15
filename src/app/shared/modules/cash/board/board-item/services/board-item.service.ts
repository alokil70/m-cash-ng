import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetBoardItemResponseInterface } from '../types/getBoardItemResponse.interface';

@Injectable({
	providedIn: 'root',
})
export class BoardItemService {
	getItem(url: string): Observable<GetBoardItemResponseInterface> {}
}
