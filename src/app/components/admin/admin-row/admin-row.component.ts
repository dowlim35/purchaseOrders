import {Component, Input, OnInit} from '@angular/core';
import {History} from '../../../model/history';
import {HistoryService} from '../../../services/history.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-admin-row]',
  templateUrl: './admin-row.component.html',
  styleUrls: ['./admin-row.component.css']
})
export class AdminRowComponent implements OnInit {

  @Input()
  history: History;
  constructor(private historyService: HistoryService) {
     // this.history.status = historyService.stat;
  }

  ngOnInit() {
  }

  approveForm() {
    this.historyService.updateStatus('ACCEPTED');

  }

  rejectForm() {
    this.historyService.updateStatus('DENIED');
  }

}
