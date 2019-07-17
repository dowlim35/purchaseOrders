import { Injectable } from '@angular/core';
import {History} from '../../assets/model/history';
import {DATA} from '../../assets/mock/mockHistoryData';
import {Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() { }
  getHistory(): Observable<History[]> {
    return of(DATA);

  }
}
