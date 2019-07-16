import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {PurchaseOrder} from '../model/purchaseOrder';
import {Observable} from 'rxjs';
import {PurchaseOrdersService} from "./purchase-orders.service";

@Injectable()
export class PurchaseOrdersServiceHttp extends PurchaseOrdersService {
  constructor(private http: HttpClient) {
    super();
  }

  fetchPurchaseOrders(): Observable<PurchaseOrder[]> {
    console.log('Fetching purchase orders via service...');

    return this.http.get<PurchaseOrder[]>('assets/data/purchaseOrders.json');
  }
}
