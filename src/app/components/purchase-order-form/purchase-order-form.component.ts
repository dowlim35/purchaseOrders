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
  price: number;

  name = "PurchaseOrderUpdateForm";


  constructor(private poService: PurchaseOrdersService) {

  this.supplierName = poService.getSupplierName();
  this.itemName = poService.getItemName();
  this.quantity = poService.getQuantity();
  this.currency = poService.getCurrency();
  this.date = poService.getDate();
  this.price = poService.getPrice();
  }

  ngOnInit() {

    };

    updatePurchaseOrder(){
    this.poService.setSupplierName(this.supplierName);
      this.poService.setItemName(this.itemName);
      this.poService.setQuantity(this.quantity);
      this.poService.setDate(this.date);
      this.poService.setPrice(this.price);
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

}
