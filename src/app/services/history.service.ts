import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {History} from '../model/history';
import {FormType} from '../../assets/enums/FormType';
import {AccountType} from '../../assets/enums/AccountType';


//@Injectable({
//  providedIn: 'root'
//})
export abstract class HistoryService {

  abstract fetchHistory(): Observable<History[]>;
  abstract putHistory(item): Observable<History>;

}
