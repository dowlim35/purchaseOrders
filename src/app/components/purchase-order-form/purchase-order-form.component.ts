import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PurchaseOrder} from "../../model/purchaseOrder";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {filter} from "rxjs/operators";
import {NgModel} from "@angular/forms";
import {PurchaseOrdersService} from "../../services/purchase-orders.service";
import {NavBarService} from 'src/app/services/navBarService';

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
  pageName : string;

  name = "PurchaseOrderUpdateForm";


  constructor(private poService: PurchaseOrdersService, private navBarService: NavBarService) {

  navBarService.setPageName("Purchase Order")
  this.supplierName = poService.getSupplierName();
  this.itemName = poService.getItemName();
  this.quantity = poService.getQuantity();
  this.currency = poService.getCurrency();
  this.date = poService.getDate();
  this.price = poService.getPrice();
  this.companyCreditCardUsed = poService.getCompanyCreditCardUsed();
  }

  ngOnInit() {


  };

  // public getPageName()
  // {
  //   return this.pageName;
  // }
    updatePurchaseOrder(){
    this.poService.setDetails(this.supplierName, this.itemName, this.quantity, this.price, this.currency, this.date, this.companyCreditCardUsed, this.navBarService, this.pageName);
    }

    inEuro() {
      this.poService.setCurrency("€");
    }

   inDollar() {
      this.poService.setCurrency("$");
    }

    inPound() {
      this.poService.setCurrency("£");
    }

    setCompanyCreditCardUsedTrue()
    {
      this.poService.setCompanyCreditCardUsed(true);
    }

}
