import { Component, OnInit} from '@angular/core';


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
  constructor()
  {
    this.ngOnInit();
  }
  ngOnInit() {

  }
}
