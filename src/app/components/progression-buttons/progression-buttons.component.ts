import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progression-buttons',
  templateUrl: './progression-buttons.component.html',
  styleUrls: ['./progression-buttons.component.css']
})
export class ProgressionButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  previousPage() {
    window.history.back();
  }
  nextPage() {
  }
}
