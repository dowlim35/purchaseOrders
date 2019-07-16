import {PurchaseOrder} from '../model/purchaseOrder';
import {Observable} from 'rxjs';

export abstract class PurchaseOrdersService {
  abstract fetchPurchaseOrders(): Observable<PurchaseOrder[]>;
}
