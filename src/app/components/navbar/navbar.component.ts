import { Component, OnInit, Input } from '@angular/core';
import {PurchaseOrder} from 'src/app/model/purchaseOrder';
import {FlightDetailsComponent} from '../travel/flightdetails/flightdetails.component';
import {HotelCarDetailsComponent} from '../travel/hotelcardetails/hotelcardetails.component';
import {PurchaseOrdersService} from "../../services/purchase-orders.service";
import {NavBarService} from 'src/app/services/navBarService';

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



  constructor(private navBarService : NavBarService)
  {
  this.pageName = navBarService.getPageName();

  }

  ngOnInit() {
  }
  setName (name) {
    this.pageName = this.navBarService.getPageName();
  }
}
