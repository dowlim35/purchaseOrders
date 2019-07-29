import { Component, OnInit } from '@angular/core';
// import {MockService} from '../../services/mock.service';
import { History} from '../../model/history';
import {HistoryService} from '../../services/history.service';

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
    this.history = this.history.slice(this.history.length - 5, this.history.length ).reverse();
  }
  getData(): void {
    this.dataService.fetchHistory()
      .subscribe(history => this.history = history);
  }
}
