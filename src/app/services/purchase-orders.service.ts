import {PurchaseOrder} from '../model/purchaseOrder';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class PurchaseOrdersService {
  name = '';
  setName(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  // abstract fetchPurchaseOrders(): Observable<PurchaseOrder[]>;
}
