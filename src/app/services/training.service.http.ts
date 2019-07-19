import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Training} from '../model/training';
import {Observable} from 'rxjs';
import {TrainingService} from './training.service';

@Injectable()
export class TrainingServiceHttp extends TrainingService {
  constructor(private http: HttpClient) {
    super();
  }

  // fetchTraining(): Observable<Training[]> {
  //   console.log('Fetching training via service...');
  //
  //   // change json
  //   return this.http.get<Training[]>('assets/data/training.json');
  // }
}
