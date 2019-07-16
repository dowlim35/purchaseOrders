import {Component, Input} from '@angular/core';
import {PurchaseOrder} from "../../model/purchaseOrder";


@Component({
  selector: 'app-purchase-order-viewer',
  templateUrl: './purchase-order-viewer.component.html',
  styleUrls: ['./purchase-order-viewer.component.css']
})
export class PurchaseOrderViewerComponent {
  name = 'PurchaseOrderViewer';

  @Input() selected: PurchaseOrder;
}
