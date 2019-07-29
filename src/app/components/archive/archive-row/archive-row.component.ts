import {Component, Input, OnInit} from '@angular/core';
import { History} from '../../../model/history';
import {PurchaseOrdersService} from "../../../services/purchase-orders.service";
import {TrainingService} from "../../../services/training.service";

@Component({
  selector: '[app-archive-row]',
  templateUrl: './archive-row.component.html',
  styleUrls: ['./archive-row.component.css']
})
export class ArchiveRowComponent implements OnInit {
  @Input()
  history: History;
  constructor(poService: PurchaseOrdersService, trainingService: TrainingService) { }

  ngOnInit() {
  }

  getArchiveItem( )
  {
  }
}
