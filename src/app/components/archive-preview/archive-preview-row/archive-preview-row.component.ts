import {Component, Input, OnInit} from '@angular/core';
import {History} from '../../../model/history';

@Component({
  selector: '[app-archive-preview-row]',
  templateUrl: './archive-preview-row.component.html',
  styleUrls: ['./archive-preview-row.component.css']
})
export class ArchivePreviewRowComponent implements OnInit {
@Input()
history: History[];
  constructor() { }

  ngOnInit() {
  }

}
