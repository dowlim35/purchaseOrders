import { Injectable } from '@angular/core';
import {DraftHistory} from '../model/draft-history';
import {Observable, of} from 'rxjs';
import {DATA} from '../../assets/mock/mockDraftData';

@Injectable({
  providedIn: 'root'
})
export class DraftService {
z
  constructor() { }
  getDraftHistory(): Observable<any[]> {
    return of(DATA);
  }
}
