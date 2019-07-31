import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {TravelModel} from '../model/travelmodel';
import {Observable} from 'rxjs';
import {TravelService} from './travel.service';

@Injectable()
export class PurchaseOrdersServiceHttp extends TravelService {
  constructor(private http: HttpClient) {
    super();
  }

  fetchTravelOrders(): Observable<TravelModel[]> {
    console.log('Fetching travel orders via service...');

    return this.http.get<TravelModel[]>('assets/data/purchaseOrders.json');
  }
}
