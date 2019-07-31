import {PurchaseOrder} from '../model/purchaseOrder';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'})

export abstract class PurchaseOrdersService {
supplierName: ' ';
itemName: ' ';
quantity: number;
unitPrice: number;
currency: ' ';
date: Date;
companyCreditCardUsed: boolean;
totalAmount: number;
results: PurchaseOrder;
abstract fetchPurchaseOrders(): Observable<PurchaseOrder[]>;
abstract postPurchaseOrders(purchases): Observable<PurchaseOrder>;


setPaymentDetails(quantity, unitPrice, totalAmount) {
  this.quantity = quantity;
  this.unitPrice = unitPrice;
}
getDetails() {
  this.results = {
    supplierName: this.supplierName,
    itemName: this.itemName,
    quantity: this.quantity,
    currency: this.currency,
    dates: new Date(),
    price: this.unitPrice};

  return this.results;
}
setDetails(supplierName, itemName, quantity, unitPrice, currency, date, companyCreditCardUsed) {
  this.supplierName = supplierName;
  this.itemName = itemName;
  this.quantity = quantity;
  this.unitPrice = unitPrice;
  this.date = date;
  this.companyCreditCardUsed = companyCreditCardUsed;
}
setQuantity(quantity) {
  this.quantity = quantity;
}

setUnitPrice(unitPrice) {
  this.unitPrice = unitPrice;
}
getTotalAmount() {
  this.totalAmount = this.quantity * this.unitPrice;
  return this.totalAmount;
}

  getSupplierName() {
  return this.supplierName;
  }


  getItemName() {
    return this.itemName;
  }

  getCurrency() {
    return this.currency;
  }

  setCurrency(currency) {
    this.currency = currency;
  }

  getQuantity() {
    return this.quantity;
  }

  getDate() {
    return this.date;
  }

  getUnitPrice() {
    return this.unitPrice;
  }

  getCompanyCreditCardUsed() {
    return this.companyCreditCardUsed;
  }

  setCompanyCreditCardUsed(companyCreditCardUsed) {
    this.companyCreditCardUsed = companyCreditCardUsed;
  }
  // resetForm(){
  //   this.supplierName = ' ';
  //   this.itemName: ' ';
  //   quantity: number;
  //   unitPrice: number;
  //   currency: ' ';
  //   date: Date;
  //   companyCreditCardUsed: boolean;
  //   totalAmount: number;
  //   results: PurchaseOrder;
  // }
}
