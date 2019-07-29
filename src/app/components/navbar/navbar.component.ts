import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  pageName = 'Homepage of the header';
  imgLogo = '../../../assets/images/logo.png';

  constructor() { }

  ngOnInit() {
  }

}
