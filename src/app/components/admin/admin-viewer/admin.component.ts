import { Component, OnInit } from '@angular/core';
import {History} from '../../../model/history';
import {HistoryService} from '../../../services/history.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  header = ['PO Number', 'Form Type', 'Sub-account', 'Description', 'Date'];
  history: History[];
  constructor(private dataService: HistoryService) { }

   ngOnInit() {
     this.getData();
   }
   getData(): void {
     this.dataService.fetchHistory()
       .subscribe(history => this.history = history);
   }
}
