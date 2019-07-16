import {Component, Input, OnInit} from '@angular/core';
import {History} from '../../../../assets/model/history';

@Component({
  selector: 'app-archive-row',
  templateUrl: './archive-row.component.html',
  styleUrls: ['./archive-row.component.css']
})
export class ArchiveRowComponent implements OnInit {
  @Input() history: History;

  constructor() { }

  ngOnInit() {
  }

}
