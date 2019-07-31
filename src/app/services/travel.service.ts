import {TravelModel} from '../model/travelmodel';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {AccountType} from '../../assets/enums/AccountType';
import {ReasonforTravel} from '../../assets/enums/ReasonforTravel';

@Injectable({
  providedIn: 'root'})

export class TravelService {
  // Travel Details
  unitname = '';
  SDL: ' ';
  numberofpassengers = 0;
  paymentmethod = ' ';
  subaccount = AccountType;
  reasonfortravel = ReasonforTravel;
  creditcard = ' ';

  // Hotel and Car Details
  hotelname = ' ';
  cost = 0;
  arrivaldate = new Date();
  departuredate = new Date();
  enterprisecar = false;
  car = false;
  pickupdate = new Date();
  dropdate = new Date();
  returnto = ' ';
  costperday = 0;

  // Flight Details
  departureairport: ' ';
  arrivalairport: '';
  departuredateflight = new Date();
  arrivaldateflight = new Date();
  costflight = 0;
  leastexpensive = false;
  explanation = ' ';

  setTravelDetails(unitname, SDL, numberofpassengers, paymentmethod, subaccount, reasonfortravel, creditcard)
  {
   this.unitname = unitname;
   this.SDL = SDL;
   this.numberofpassengers = numberofpassengers;
   this.paymentmethod = paymentmethod;
   this.subaccount = subaccount;
   this.reasonfortravel = reasonfortravel;
   this.creditcard = creditcard;
  }

  setHotelDetails(hotelname, cost, arrivaldate, departuredate, entreprisecar, car, pickupdate, dropdate, returnto, costperday)
  {
    this.hotelname = hotelname;
    this.cost = cost;
    this.arrivaldate = arrivaldate;
    this.departuredate = departuredate;
    this.enterprisecar = entreprisecar;
    this.car = car;
    this.pickupdate = pickupdate;
    this.dropdate = dropdate;
    this.returnto = returnto;
    this.costperday = costperday;
  }

  setFlightDetails(departureairport, arrivalairport, departuredateflight, arrivaldateflight, costflight, leastexpensive, explanation)
  {
   this.departureairport = departureairport;
   this.arrivalairport = arrivalairport;
   this.departuredateflight = departuredateflight;
   this.arrivaldateflight = arrivaldateflight;
   this.costflight = costflight;
   this.leastexpensive = leastexpensive;
   this.explanation = explanation;
  }

  // resetFlightDetails(departureairport, arrivalairport, departuredateflight, arrivaldateflight, costflight, leastexpensive, explanation)
  // {
  //   this.departureairport = ;
  //   this.arrivalairport = ;
  //   this.departuredateflight = ;
  //   this.arrivaldateflight = ;
  //   this.costflight = ;
  //   this.leastexpensive = ;
  //   this.explanation = ;
  // }


}
