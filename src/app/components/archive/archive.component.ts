import { Component, OnInit } from '@angular/core';
import { MockService} from '../../services/mock.service';
import {History} from '../../../assets/model/history';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  constructor(private dataService: MockService ) { }
  history: History[];

  ngOnInit() {
    this.getData();
  }
  getData(): void {
    this.dataService.getHistory()
      .subscribe(history => this.history = history);

  }
}
