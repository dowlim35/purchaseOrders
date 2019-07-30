import { Injectable } from '@angular/core';
import {HistoryService} from './history.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {History} from '../model/history';
import {FormType} from '../../assets/enums/FormType';
import {ArchiveStatus} from '../../assets/enums/ArchiveStatus';
import {AccountType} from '../../assets/enums/AccountType';
import {catchError} from 'rxjs/operators';
import {error} from 'util';

@Injectable()
export class HistoryServiceHttp extends HistoryService {

  pointer: number;
  header = new HttpHeaders({'Content-Type' : 'application/json'});
  getpointer(): number {
    return this.pointer;
  }

  setpointer(value: number) {
    this.pointer = this.pointer + value;
  }
  constructor(private http: HttpClient) {
    super();
  }

  fetchHistory(): Observable<History[]> {
    console.log('Data Called From service');
    return this.http.get<History[]>('http://localhost:8080/archive');
  }
  putHistory(history: History = {
    pNo: this.pointer, formType: FormType.TRAINING,
    subAccount: AccountType.MISC,
    desc: 'This is dummy Data',
    date: new Date() ,
    status: ArchiveStatus.ACCEPTED
  }): Observable<History> {
    this.setpointer(1);
    return this.http.post<History>('http://localhost:8080/archive',
      history, {headers: this.header});
       // .pipe(catchError(error()));

  }
}
