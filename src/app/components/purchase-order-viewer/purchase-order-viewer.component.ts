import {Component, Input, OnDestroy} from '@angular/core';
import {PurchaseOrder} from "../../model/purchaseOrder";
import {PurchaseOrdersService} from 'src/app/services/purchase-orders.service';


@Component({
  selector: 'app-purchase-order-viewer',
  templateUrl: './purchase-order-viewer.component.html',
  styleUrls: ['./purchase-order-viewer.component.css'],
  providers: [PurchaseOrderViewerComponent]
})
export class PurchaseOrderViewerComponent implements OnDestroy{
  supplierName: string;
  itemName: string;
  quantity: number;
  currency: string;
  date: Date;
  unitPrice: number;
  companyCreditCardUsed: boolean;
  contactName: String;
  companyName: String;
  address: String;
  email: String;
  telephoneNum: number;
  faxNum: number;
  mobileNum: number;

  constructor(private poService: PurchaseOrdersService) {
    this.supplierName = poService.supplierName;
    this.itemName = poService.itemName;
    this.currency = poService.currency;
    this.quantity = poService.quantity;
    this.date = poService.date;
    this.unitPrice = poService.unitPrice;
    this.companyCreditCardUsed = poService.companyCreditCardUsed;
    this.contactName = poService.contactName;
    this.companyName = poService.companyName;
    this.address = poService.address;
    this.email = poService.email;
    this.telephoneNum = poService.telephoneNum;
    this.faxNum = poService.faxNum;
    this.mobileNum = poService.mobileNum;

  }
  ngOnDestroy(): void {
    this.poService.resetForm();
    console.log('Form reset');
  }


}
