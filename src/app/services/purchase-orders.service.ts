import {PurchaseOrder} from '../model/purchaseOrder';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'})

export class PurchaseOrdersService {
supplierName: ' ';
itemName: ' ';
quantity: number;
price: number;
currency:' ';
date: Date;
companyCreditCardUsed: boolean;

setDetails(supplierName, itemName, quantity, price, currency, date, companyCreditCardUsed)
{
  this.supplierName = supplierName;
  this.itemName = itemName;
  this.quantity = quantity;
  this.price = price;
  this.date = date;
  this.companyCreditCardUsed = companyCreditCardUsed;
}

  getSupplierName()
  {
  return this.supplierName;
  }


  getItemName()
  {
    return this.itemName;
  }

  getCurrency()
  {
    return this.currency;
  }

  setCurrency(currency)
  {
    this.currency = currency;
  }

  getQuantity()
  {
    return this.quantity;
  }

  getDate()
  {
    return this.date;
  }

  getPrice()
  {
    return this.price;
  }

  getCompanyCreditCardUsed()
  {
    return this.companyCreditCardUsed;
  }

  setCompanyCreditCardUsed(companyCreditCardUsed)
  {
    this.companyCreditCardUsed = companyCreditCardUsed;
  }

}
