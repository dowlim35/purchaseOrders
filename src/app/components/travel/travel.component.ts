import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TravelModel} from '../../model/travelmodel';
import {AccountType} from '../../../assets/enums/AccountType';
import {ReasonforTravel} from '../../../assets/enums/ReasonforTravel';
import {TravelService} from '../../services/travel.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css'],
  providers: [TravelComponent]
})
export class TravelComponent implements OnInit {
  travelForm: FormGroup;

  unitname: string;
  SDL: string;
  numberofpassengers: number;
  paymentmethod: string;
  subaccount: AccountType;
  reasonfortravel: ReasonforTravel;
  creditcard: string;


  @Input() travel: TravelModel;
  @Output() updateComplete = new EventEmitter<TravelModel>();

  name = 'TheTravelForm';

  constructor(private toService: TravelService){
    this.unitname = toService.unitname;
    this.SDL = toService.SDL;
    this.numberofpassengers = toService.numberofpassengers;
    this.paymentmethod = toService.paymentmethod;
    this.creditcard = toService.creditcard;

  }

  // {
  //   this.travelForm = formBuilder.group({
  //     unitname: ['', Validators.required],
  //     sdl: ['', Validators.required],
  //     numberofpassengers: ['', Validators.required],
  //     paymentmethod: ['', Validators.required],
  //     subaccount: ['', Validators.required],
  //     reasonfortravel: ['', Validators.required],
  //     creditcard: ['', Validators.required],
  //   });
  // }
  ngOnInit() {};

  updateTravel(){this.toService.setTravelDetails(this.unitname, this.SDL, this.numberofpassengers, this.paymentmethod, this.subaccount, this.reasonfortravel, this.creditcard )
  }}



// paymentMethod: any = [
//   {name: 'Credit Card', value: 'CREDIT'},
//   {name: 'Debit Card', value: 'DEBIT'},
//   {name: 'Paypal', value: 'PAYPAL'}
// ];
//
// reasonforTravel: any = [
//   {name: 'Business', value: 'BUSINESS'},
//   {name: 'Training', value: 'TRAINING'},
//   {name: 'Lead Training', value: 'LEAD'},
//   {name: 'Conference', value: 'CONFERENCE'},
//   {name: 'Secondment', value: 'SECONDMENT'},
//   {name: 'Other', value: 'OTHER'}
// ];
//
// subAccounts: any = [
//   {name: 'Finance', value: 'Finance'},
//   {name: 'Insurance', value: 'Insurance'},
//   {name: 'Claims', value: 'Claims'}
// ];
//
// numberofPassengers: any = [
//   {name: 'One', value: '1'},
//   {name: 'Two', value: '2'},
//   {name: 'Three', value: '3'}
// ];
