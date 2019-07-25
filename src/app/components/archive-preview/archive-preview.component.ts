import { Component, OnInit } from '@angular/core';
import {MockService} from '../../services/mock.service';
import { History} from '../../model/history';

@Component({
  selector: 'app-archive-preview',
  templateUrl: './archive-preview.component.html',
  styleUrls: ['./archive-preview.component.css']
})
export class ArchivePreviewComponent implements OnInit {
  header = ['PO Number', 'Form Type', 'Sub-account', 'Description', 'Date', 'Status'];
  history: History[];
  constructor(private dataService: MockService) {  }

  ngOnInit() {
    this.getData();
  }
  getData(): void {
    this.dataService.getHistory()
      .subscribe(history => this.history = history);
    this.history = this.history.slice(this.history.length - 5, this.history.length ).reverse();
  }
}
