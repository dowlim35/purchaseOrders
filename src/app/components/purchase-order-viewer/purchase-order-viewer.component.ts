import {Component, Input} from '@angular/core';
import {PurchaseOrder} from "../../model/purchaseOrder";
import {PurchaseOrdersService} from 'src/app/services/purchase-orders.service';


@Component({
  selector: 'app-purchase-order-viewer',
  templateUrl: './purchase-order-viewer.component.html',
  styleUrls: ['./purchase-order-viewer.component.css'],
  providers: [PurchaseOrderViewerComponent]
})
export class PurchaseOrderViewerComponent {
  supplierName: string;
  itemName: string;
  quantity: number;
  currency: string;
  date: Date;
  unitPrice: number;
  companyCreditCardUsed: boolean;

  constructor(private poService: PurchaseOrdersService) {
    this.supplierName = poService.supplierName;
    this.itemName = poService.itemName;
    this.currency = poService.currency;
    this.quantity = poService.quantity;
    this.date = poService.date;
    this.unitPrice = poService.unitPrice;
    this.companyCreditCardUsed = poService.companyCreditCardUsed;

  }

}
