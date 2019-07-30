import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {PurchaseOrder} from '../model/purchaseOrder';
import {Observable} from 'rxjs';
import {PurchaseOrdersService} from './purchase-orders.service';

@Injectable()
export class PurchaseOrdersServiceHttp extends PurchaseOrdersService {
  constructor(private http: HttpClient) {
    super();
  }
  header = new HttpHeaders({'Content-Type' : 'application/json'});
  fetchPurchaseOrders(): Observable<PurchaseOrder[]> {
    console.log('Fetching purchase orders via service...');

    return this.http.get<PurchaseOrder[]>('http://localhost:8080/purchases');
  }

  postPurchaseOrders(purchases: PurchaseOrder): Observable<PurchaseOrder> {
    return this.http.post<PurchaseOrder>('http://localhost:8080/purchases', purchases,
      {headers: this.header});
  }
}
