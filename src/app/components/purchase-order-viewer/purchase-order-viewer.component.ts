import {Component, Input} from '@angular/core';
import {PurchaseOrder} from "../../model/purchaseOrder";
import {PurchaseOrdersService} from '../../services/purchase-orders.service';
import {MockService} from '../../services/mock.service';


@Component({
  selector: 'app-purchase-order-viewer',
  templateUrl: './purchase-order-viewer.component.html',
  styleUrls: ['./purchase-order-viewer.component.css'],
  providers: [PurchaseOrderViewerComponent]
})
export class PurchaseOrderViewerComponent {
  name = 'PurchaseOrderViewer';
  selected: PurchaseOrder;
  // @Input() selected: PurchaseOrder;
  constructor(private poService: PurchaseOrdersService, private archiveService: MockService) {
    this.name = poService.name;
    // +this.selected.supplierName = this.name;
    this.archiveService.addToArchive(
      {poNumber: 2, formType: 'Purchase Order', subAccount: 'Misc', desc: 'yikers', date: 'yes this is date', status: 'Approved' });
  }
}
