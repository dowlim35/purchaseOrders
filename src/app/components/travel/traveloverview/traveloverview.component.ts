import {Component, OnInit} from '@angular/core';
import {TravelService} from '../../../services/travel.service';
import {AccountType} from '../../../../assets/enums/AccountType';
import {ReasonforTravel} from '../../../../assets/enums/ReasonforTravel';

@Component({
  selector: 'app-traveloverview',
  templateUrl: './traveloverview.component.html',
  styleUrls: ['./traveloverview.component.css'],
  providers: [TravelOverviewComponent]
})
export class TravelOverviewComponent implements OnInit {
  totalprice: number;
  // Overview
  unitname: string;
  SDL: string;
  numberofpassengers: number;
  nnumber: string;
  passengername: string;
  paymentmethod: string;
  subaccount: AccountType;
  reasonfortravel: ReasonforTravel;
  creditcard: string;

  // Hotel Details
  hotelname: string;
  cost: number;
  arrivaldate: Date;
  departuredate: Date;
  enterprisecar: boolean;
  car: boolean;
  pickupdate: Date;
  dropdate: Date;
  returnto: string;
  costperday: number;

  // Flight Details
  departureairport: string;
  arrivalairport: string;
  departuredateflight: Date;
  arrivaldateflight: Date;
  costflight: number;
  leastexpensive: boolean;
  explanation: string;
  leastExpensive = true;

  ngOnInit() {
  }


  constructor(private toService: TravelService) {
    this.totalprice = this.toService.getTotalPrice();
    // Overview
    this.unitname = toService.unitname;
    this.passengername = toService.passengername;
    this.nnumber = toService.nnumber;
    this.SDL = toService.SDL;
    this.numberofpassengers = toService.numberofpassengers;
    this.paymentmethod = toService.paymentmethod;
    this.creditcard = toService.creditcard;

    // Hotel Details
    this.hotelname = toService.hotelname;
    this.cost = toService.cost;
    this.arrivaldate = toService.arrivaldate;
    this.departuredate = toService.departuredate;
    this.enterprisecar = toService.enterprisecar;
    this.car = toService.car;

    // Flight Details
    this.departureairport = toService.departureairport;
    this.arrivalairport = toService.arrivalairport;
    this.departuredateflight = toService.departuredateflight;
    this.arrivaldateflight = toService.arrivaldateflight;
    this.costflight = toService.costflight;
    this.leastexpensive = toService.leastexpensive;
    this.explanation = toService.explanation;
  }
}
