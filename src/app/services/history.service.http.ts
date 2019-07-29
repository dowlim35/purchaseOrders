import { Injectable } from '@angular/core';
import {HistoryService} from './history.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {History} from '../model/history';

//@Injectable({
//  providedIn: 'root'
//})
@Injectable()
export class HistoryServiceHttp extends HistoryService {

  constructor(private http: HttpClient) {
    super();
  }

  fetchHistory(): Observable<History[]> {
    console.log('Data Called From service');
    return this.http.get<History[]>('http://localhost:8080/archive');
  }
}
