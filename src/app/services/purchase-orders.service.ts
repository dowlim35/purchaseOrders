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

getSupplierName()
{
  return this.supplierName;
}

setSupplierName(supplierName)
{
  this.supplierName = supplierName;
}

  getItemName()
  {
    return this.itemName;
  }

  setItemName(itemName)
  {
    this.itemName = itemName;
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

  setQuantity(quantity)
  {
    this.quantity = quantity;
  }

  getDate()
  {
    return this.date;
  }

  setDate(date)
  {
    this.date = date;
  }

}
