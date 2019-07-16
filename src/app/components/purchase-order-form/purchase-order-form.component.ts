import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PurchaseOrder} from "../../model/purchaseOrder";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {filter} from "rxjs/operators";
import {NgModel} from "@angular/forms";
import {PropertiesService} from "../../services/properties.service";

@Component({
  selector: 'app-purchase-orders',
  templateUrl: './purchase-order-form.html',
  styleUrls: ['./purchase-order-form.component.css'],
  providers: [PropertiesService]
})
export class PurchaseOrderFormComponent implements OnInit {
  updateForm: FormGroup;
  supplierName: string;
  quantity: number;
  itemName: string;
  date: Date;
  currency: symbol;

  purchaseorders: PurchaseOrder[];
  @Input() purchaseOrder: PurchaseOrder;
  @Output() updateComplete = new EventEmitter<PurchaseOrder>();

  subAccounts: any = [
    {name: 'A', value: 'A'},
    {name: 'B', value: 'B'},
    {name: 'C', value: 'C'},
    {name: 'D', value: 'D'},
  ]
  name = "PurchaseOrderUpdateForm";


  constructor(private formBuilder: FormBuilder ) {
    this.updateForm = formBuilder.group({
      supplierName: ['', Validators.required],
      itemName: ['', Validators.required],
      quantity: [' ', Validators.required],
      currency: [' ', Validators.required],
      dates : [' ', Validators.required],
    })
  }

  ngOnInit() {
    this.updateForm.valueChanges.pipe(filter(values => this.updateForm.valid)).subscribe(values => {
      console.log('Updating purchase order object via Observable');
      this.purchaseOrder.supplierName = values.supplierName;
      this.purchaseOrder.itemName = values.itemName;
      this.purchaseOrder.quantity = values.quantity;
      this.purchaseOrder.currency = values.quantity;
      this.purchaseOrder.dates = values.dates;

    });
  }
    updatePurchaseOrder(){
    this.purchaseorders.push({
      supplierName: this.supplierName,
      itemName: this.itemName, currency: this.currency, quantity: this.quantity, dates:this.date
    })
    }


}
