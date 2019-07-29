import { Component, OnInit } from '@angular/core';
import { MockService} from '../../services/mock.service';
import {History} from '../../model/history';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  header = ['PO Number', 'Form Type', 'Sub-account', 'Description', 'Date', 'Status'];
  constructor(private dataService: MockService) {

  }
  history: History[];
  statusType: any = [
    {name: 'Approved', value: 'APPROVED'},
    {name: 'Pending', value: 'PENDING'},
    {name: 'Denied ', value: 'DENIED'},
  ]
  ngOnInit() {
    this.getData();
  }
  getData(): void {
    this.dataService.getHistory()
      .subscribe(history => this.history = history);
  }
}
