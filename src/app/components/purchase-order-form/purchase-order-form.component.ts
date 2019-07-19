import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {PurchaseOrdersService} from '../../services/purchase-orders.service';

@Component({
  selector: 'app-purchase-orders',
  templateUrl: './purchase-order-form.html',
  styleUrls: ['./purchase-order-form.component.css'],
  providers: [PurchaseOrderFormComponent]

})
export class PurchaseOrderFormComponent implements OnInit {
  supplierName: any;
  constructor(private poService: PurchaseOrdersService) {
    this.supplierName = poService.getName();
  }

  ngOnInit() {
  }

  updatePurchaseOrder() {
    this.poService.setName(this.supplierName);
  }

  getName() {
    console.log(this.poService.getName());
  }
}
