import {Component, Input, OnInit} from '@angular/core';
import {DraftHistory} from '../../../model/draft-history';

@Component({
  selector: '[app-draft-archive-row]',
  templateUrl: './draft-archive-row.component.html',
  styleUrls: ['./draft-archive-row.component.css']
})
export class DraftArchiveRowComponent implements OnInit {
  @Input()
  draftHistory: DraftHistory;
  constructor() { }

  ngOnInit() {
  }

}
