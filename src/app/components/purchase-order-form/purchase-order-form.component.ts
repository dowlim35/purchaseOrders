import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PurchaseOrder} from '../../model/purchaseOrder';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {filter} from 'rxjs/operators';
import {NgModel} from '@angular/forms';
import {PurchaseOrdersService} from '../../services/purchase-orders.service';

@Component({
  selector: 'app-purchase-orders',
  templateUrl: './purchase-order-form.html',
  styleUrls: ['./purchase-order-form.component.css'],
  providers: [PurchaseOrderFormComponent]
})
export class PurchaseOrderFormComponent implements OnInit {
  updateForm: FormGroup;
  supplierName: string;
  quantity: number;
  itemName: string;
  date: Date;
  currency: string;
  price: number;
  companyCreditCardUsed: boolean;
  totalAmount: number;
  purchases: PurchaseOrder[];
  name = 'PurchaseOrderUpdateForm';
  results;


  constructor(private poService: PurchaseOrdersService) {
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
  }


}
