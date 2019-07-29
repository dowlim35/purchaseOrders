import {PurchaseOrder} from '../model/purchaseOrder';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {NavBarService} from './navBarService';

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
pageName: string;
navBarService: NavBarService;


setDetails(supplierName, itemName, quantity, price, currency, date, companyCreditCardUsed,pageName,navBarService)
{

  this.supplierName = supplierName;
  this.itemName = itemName;
  this.quantity = quantity;
  this.price = price;
  this.date = date;
  this.companyCreditCardUsed = companyCreditCardUsed;
  this.pageName = "Purchase Orders";
  this.navBarService.setPageName(this.pageName);
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

  getPageName()
  {
    return this.pageName;
  }
}
