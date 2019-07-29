import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {History} from '../model/history';

//@Injectable({
//  providedIn: 'root'
//})
export abstract class HistoryService {
  abstract fetchHistory(): Observable<History[]>;
}
