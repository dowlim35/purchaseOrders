import {Component, Input, OnInit} from '@angular/core';
import {History} from '../../../model/history';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-admin-row]',
  templateUrl: './admin-row.component.html',
  styleUrls: ['./admin-row.component.css']
})
export class AdminRowComponent implements OnInit {

  @Input()
  history: History;
  constructor() { }

  ngOnInit() {
  }

  approveForm() {

  }

}
