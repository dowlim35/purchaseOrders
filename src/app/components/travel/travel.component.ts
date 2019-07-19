import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TravelModel} from '../../model/travelmodel';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  travelForm: FormGroup;
  @Input() travel: TravelModel;
  @Output() updateComplete = new EventEmitter<TravelModel>();

  name = 'TheTravelForm';

  constructor(private formBuilder: FormBuilder) {
    this.travelForm = formBuilder.group({
      unitname: ['', Validators.required],
      sdl: ['', Validators.required],
      numberofpassengers: ['', Validators.required],
      paymentmethod: ['', Validators.required],
      subaccount: ['', Validators.required],
      reasonfortravel: ['', Validators.required],
      creditcard: ['', Validators.required],
    });
  }
  ngOnInit() {
    this.travelForm.setValue({
      departureairport: this.travel.unitname
    }); }

  updateTravel() {
    this.updateComplete.emit(this.travel);
  }
}

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
