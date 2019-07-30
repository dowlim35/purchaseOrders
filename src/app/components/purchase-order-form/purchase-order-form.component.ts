import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PurchaseOrder} from "../../model/purchaseOrder";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {filter} from "rxjs/operators";
import {NgModel} from "@angular/forms";
import {PurchaseOrdersService} from "../../services/purchase-orders.service";

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
  unitPrice: number;
  companyCreditCardUsed: boolean;
  totalAmount: number;

  name = "PurchaseOrderUpdateForm";


  constructor(private poService: PurchaseOrdersService) {
  this.poService.setDetails(this.supplierName, this.itemName, this.quantity, this.unitPrice, this.currency, this.date, this.companyCreditCardUsed);
  }

  ngOnInit() {

    };
  setPaymentDetails(currency, unitPrice, quantity)
  {
    this.currency = currency;
    this.unitPrice = unitPrice;
    this.quantity = quantity;
  }
    updatePaymentDetailsEuro()
    {
      // this.inEuro();
      this.totalAmount = this.poService.getQuantity() * this.poService.getUnitPrice();
    }
  updatePaymentDetailsPound()
  {
    this.inPound();
    this.getTotalAmount();
  }
  updatePaymentDetailsDollar()
  {
    this.inDollar();;
    this.getTotalAmount();
  }

    updatePurchaseOrder(){
    this.poService.setDetails(this.supplierName, this.itemName, this.quantity, this.unitPrice, this.currency, this.date, this.companyCreditCardUsed);
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

    getTotalAmount()
    {
      this.totalAmount = this.quantity * this.unitPrice;
    }


}
