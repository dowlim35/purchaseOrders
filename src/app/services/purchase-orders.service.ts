import {PurchaseOrder} from '../model/purchaseOrder';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'})

export abstract class PurchaseOrdersService {
  // contactName: String;
  // companyName: String;
  // address: String;
  // email: String;
  // telephoneNum: number;
  // faxNum: number;
  // mobileNum: number;

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
      price: this.unitPrice
    }
      // contactName: this.contactName,
      // companyName: this.companyName,
      // address: this.address,
      // email: this.email,
      // telephoneNum: this.telephoneNum,
      // faxNum: this.faxNum,
      // mobileNum: this.mobileNum};

    return this.results;
  }
  setDetails(supplierName, itemName, quantity, unitPrice, currency, date, companyCreditCardUsed) {
    this.supplierName = supplierName;
    this.itemName = itemName;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
    this.date = date;
    this.companyCreditCardUsed = companyCreditCardUsed;
    // this.contactName = contactName;
    // this.companyName = companyName;
    // this.telephoneNum = telephoneNum;
    // this.faxNum = faxNum;
    // this.mobileNum = mobileNum;
    // this.email = email;
    // this.address = address;
  }
  // setEmail(email)
  // {
  //   this.email = email;
  // }
  // setCompanyName(companyName)
  // {
  //   this.companyName = companyName;
  // }
  // setTelephoneNum(telephoneNum)
  // {
  //   this.telephoneNum = telephoneNum;
  // }
  //
  // setFaxNumber(faxNum)
  // {
  //   this.faxNum = faxNum;
  // }
  //
  // setMobileNum(mobileNum)
  // {
  //   this.mobileNum = mobileNum;
  // }
  // setContactName(contactName)
  // {
  //   this.contactName = contactName;
  // }
  // getAddress()
  // {
  //   return this.address;
  // }
  // getEmail()
  // {
  //   return this.email;
  // }
  // getContactName()
  // {
  //   return this.contactName;
  // }
  // getCompanyName()
  // {
  //   return this.companyName;
  // }
  //
  // getTelephoneNum()
  // {
  //   return this.telephoneNum;
  // }
  //
  // getFaxNumber()
  // {
  //   return this.faxNum;
  // }
  //
  // getMobileNum()
  // {
  //   return this.mobileNum;
  // }
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
  resetForm() {
    // this.contactName='';
    // this.companyName='';
    // this.address='';
    // this.email='';
    // this.telephoneNum =0;
    // this.faxNum=0;
    // this.mobileNum=0;
    this.supplierName = ' ';
    this.itemName = ' ';
    this.quantity = null;
    this.unitPrice = null;
    this.currency = ' ';
    this.date = null;
    this.companyCreditCardUsed = null;
    this.totalAmount = null;
    this.results = null;
  }
}
