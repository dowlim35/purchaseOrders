import { Component, OnInit } from '@angular/core';
// import {MockService} from '../../services/mock.service';
import { History} from '../../model/history';
import {HistoryService} from '../../services/history.service';
import {FormType} from '../../../assets/enums/FormType';
import {AccountType} from '../../../assets/enums/AccountType';
import {ArchiveStatus} from '../../../assets/enums/ArchiveStatus';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-archive-preview',
  templateUrl: './archive-preview.component.html',
  styleUrls: ['./archive-preview.component.css']
})
export class ArchivePreviewComponent implements OnInit {
  header = ['PO Number', 'Form Type', 'Sub-account', 'Description', 'Date', 'Status'];
  history: History[];
  constructor(private dataService: HistoryService) {  }
  ngOnInit() {
    this.getData();
    // this.history = this.history.slice(this.history.length - 5, this.history.length ).reverse();
  }
  getData(): void {
    this.dataService.fetchHistory()
      .subscribe(history => this.history = history);
  }
  addData(): void {
    this.dataService
      .putHistory()
      .subscribe(history => this.history.push(history));
  }
}
