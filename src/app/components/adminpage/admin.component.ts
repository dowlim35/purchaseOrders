import { Component, OnInit } from '@angular/core';
import {History} from '../../model/history';
import {HistoryService} from '../../services/history.service';
import {DraftHistory} from '../../model/draft-history';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit{

  header = ['PO Number', 'Form Type', 'Sub-account', 'Description', 'Date', 'Status'];
  constructor(private dataService: HistoryService ) { }
  history: History[];
  draftHistory: DraftHistory[];
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

  approveExpense(){
  }

  denyExpense(){
  }
}
