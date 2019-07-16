import { Component, OnInit, Input } from '@angular/core';
import {History} from '../../../assets/model/history';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  headerList = ['poNum', 'formType', 'description', 'subAcc', 'date', 'status' ];
  dataHist = [{poNumber: 1,
    formType: 'yes',
    description: 'yes',
    subAccount: 'yes',
    date: Date(),
    status: 'Approved'},
    {poNumber: 2,
      formType: 'yes',
      description: 'yes',
      subAccount: 'yes',
      date: Date(),
      status: 'Approved'}];
  history: History;
  constructor() { }

  ngOnInit() {
    // this.data.history
    //   .subscribe(history => this.history = history);
  }

}
