import { Component, OnInit, Input } from '@angular/core';
import {PurchaseOrder} from 'src/app/model/purchaseOrder';
import {FlightDetailsComponent} from '../travel/flightdetails/flightdetails.component';
import {HotelCarDetailsComponent} from '../travel/hotelcardetails/hotelcardetails.component';
import {PurchaseOrdersService} from '../../services/purchase-orders.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [NavbarComponent]
})
export class NavbarComponent implements OnInit {
  @Input()
   pageName: string;

  imgLogo = '../../../assets/images/logo.png';



  constructor() {
  this.pageName = 'Welcome';
  }

  ngOnInit() {
  }
  updateNameToWelcome() {
    this.pageName = 'Welcome';
  }
  updateNameToTravel() {
    this.pageName = 'Travel';
  }

  updateNameToPO() {
    this.pageName = 'Purchase Order';
  }

  updateNameToContractor() {
    this.pageName = 'Contractor';
  }

  updateNameToTraining() {
    this.pageName = 'Training';
  }

  updateNameToArchive() {
    this.pageName = 'Archive';
  }
  updateNameToAdmin() {
    this.pageName = 'Admin';
  }
}
