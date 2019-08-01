import {Component, Input, OnInit} from '@angular/core';
import { History} from '../../../model/history';
import {PurchaseOrdersService} from '../../../services/purchase-orders.service';
import {TrainingService} from '../../../services/training.service';

@Component({
  selector: 'app-admin-row',
  templateUrl: './admin-row.component.html',
  styleUrls: ['./admin-row.component.css']
})
export class AdminRowComponent implements OnInit {
  @Input()
  history: History;
  constructor(poService: PurchaseOrdersService, trainingService: TrainingService) { }

  ngOnInit() {
  }

  getArchiveItem( )
  {
  }
}
