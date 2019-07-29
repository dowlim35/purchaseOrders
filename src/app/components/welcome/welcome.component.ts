import { Component, OnInit} from '@angular/core';
import {NavBarService} from 'src/app/services/navBarService';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  pageName: string;

  imgTravel = '../../../assets/images/Planes.jpeg';
  imgTraining = '../../../assets/images/training.jpeg';
  imgPO = '../../../assets/images/purchaseOrders.jpg';
  imgContractors = '../../../assets/images/contractors.jpeg';
  imgArchive = '../../../assets/images/archive.jpeg'
  constructor(private navBarService: NavBarService)
  {
    this.navBarService = navBarService;
    navBarService.setPageName("Welcome");
    this.ngOnInit();
  }
  ngOnInit() {

  }
}
