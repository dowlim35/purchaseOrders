import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-previous-button',
  templateUrl: './previous-button.component.html',
  styleUrls: ['./previous-button.component.css']
})
export class PreviousButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  previousPage() {
    window.history.back();
  }

}
