import { Component, OnInit } from '@angular/core';
// import { MockService} from '../../services/mock.service';
import {History} from '../../model/history';
import {HistoryService} from '../../services/history.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  header = ['PO Number', 'Form Type', 'Sub-account', 'Description', 'Date', 'Status'];
  constructor(private dataService: HistoryService ) { }
  history: History[];
  // statusType: any = [
  //   {name: 'Approved', value: 'APPROVED'},
  //   {name: 'Pending', value: 'PENDING'},
  //   {name: 'Denied ', value: 'DENIED'},
  // ]
  ngOnInit() {
    this.getData();
  }
  getData(): void {
    this.dataService.fetchHistory()
      .subscribe(history => this.history = history);
  }
}
