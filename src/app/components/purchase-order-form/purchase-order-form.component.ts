import {Component, OnInit} from '@angular/core';
import {PurchaseOrder} from '../../model/purchaseOrder';
import {FormGroup} from '@angular/forms';
import {PurchaseOrdersService} from '../../services/purchase-orders.service';
import {HistoryService} from '../../services/history.service';
import {History} from '../../model/history';
import {FormType} from '../../../assets/enums/FormType';

import {AccountType} from '../../../assets/enums/AccountType';

@Component({
  selector: 'app-purchase-orders',
  templateUrl: './purchase-order-form.html',
  styleUrls: ['./purchase-order-form.component.css'],
  providers: [PurchaseOrderFormComponent]
})
export class PurchaseOrderFormComponent implements OnInit {
  updateForm: FormGroup;
  form = FormType.PO;
  supplierName: string;
  quantity: number;
  itemName: string;
  date: Date;
  currency: string;
  price: number;
  subacc: string;
  companyCreditCardUsed: boolean;
  totalAmount: number;
  purchases: PurchaseOrder[];
  name = 'PurchaseOrderUpdateForm';
  details: History;
  results;
  archive: History[];


  constructor(private poService: PurchaseOrdersService, private archiveService: HistoryService) {
    this.results = this.poService.getDetails();
    this.supplierName = poService.getSupplierName();
    this.itemName = poService.getItemName();
    this.quantity = poService.getQuantity();
    this.currency = poService.getCurrency();
    this.date = poService.getDate();
    this.price = poService.getUnitPrice();
    this.companyCreditCardUsed = poService.getCompanyCreditCardUsed();
  }

  ngOnInit() {

  }

  updatePurchaseOrder() {
    // tslint:disable-next-line:max-line-length
    this.poService.setDetails(this.supplierName, this.itemName, this.quantity, this.price, this.currency, this.date, this.companyCreditCardUsed);
    this.postData();
  }

  inEuro() {
    this.currency = '€';
    this.poService.setCurrency('€');
    this.getTotalAmount();
  }

  inDollar() {
    this.currency = '$';
    this.poService.setCurrency('$');
    this.getTotalAmount();
  }

  inPound() {
    this.currency = '£';
    this.poService.setCurrency('£');
    this.getTotalAmount();
  }

  setCompanyCreditCardUsedTrue() {
    this.poService.setCompanyCreditCardUsed(true);
  }

  getTotalAmount() {
    this.totalAmount = this.quantity * this.price;
  }

  postData(): void {
    this.results = this.poService.getDetails();
    this.poService.postPurchaseOrders(this.results)
      .subscribe(purchases => this.purchases.push(purchases));
<<<<<<< HEAD
    this.details = {pNo: 1, formType: this.form, details: this.results, status: ArchiveStatus.PENDING, date: new Date(), desc: (this.supplierName + ' ' + this.itemName + ' ' + this.currency + this.price), subAccount: this.subacc, details2: null};
=======
    this.details = {pNo: 1, formType: this.form, details: this.results, status:"PENDING", date: new Date(), desc: (this.supplierName + ' ' + this.itemName + ' ' + this.currency + this.price), subAccount: this.subacc};
>>>>>>> 921abcaef59cadbc70a26054f848fac6ed3ea459
    this.archiveService.putHistory(this.details)
      .subscribe(archive => this.archive.push(archive));
  }


}
