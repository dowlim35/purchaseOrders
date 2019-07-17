import { Component, OnInit } from '@angular/core';
import {DraftHistory} from '../../model/draft-history';
import {DraftService} from '../../services/draft.service';

@Component({
  selector: 'app-draft-archive',
  templateUrl: './draft-archive.component.html',
  styleUrls: ['./draft-archive.component.css']
})
export class DraftArchiveComponent implements OnInit {
  header = ['Form Type', 'Description', 'Sub-account', 'Date', ' '];
  draftHistory: DraftHistory[];
  constructor(private dataService: DraftService) { }

  ngOnInit() {
    this.getData();
  }
  getData(): void {
    this.dataService.getDraftHistory()
      .subscribe(draftHistory => this.draftHistory = draftHistory);
  }
}
