import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Training} from '../model/training';
import {Observable} from 'rxjs';
import {TrainingService} from './training.service';
import {PurchaseOrder} from '../model/purchaseOrder';

@Injectable()
export class TrainingServiceHttp extends TrainingService {
  constructor(private http: HttpClient) {
    super();
  }

  header = new HttpHeaders({'Content-Type' : 'application/json'});

  fetchTraining(): Observable<Training[]> {
    return this.http.get<Training[]>('http://localhost:8080/training');
  }

  postTraining(training: Training): Observable<Training> {
    return this.http.post<Training>('http://localhost:8080/training', training, {headers: this.header});
  }
}
