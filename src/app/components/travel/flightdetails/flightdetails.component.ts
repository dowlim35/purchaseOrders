import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {TravelModel} from '../../../model/travelmodel';


@Component({
  selector: 'app-flightdetails',
  templateUrl: './flightdetails.component.html',
  styleUrls: ['./flightdetails.component.css']
})
export class FlightDetailsComponent implements OnInit {
  flightForm: FormGroup;
  @Input() flight: TravelModel;
  @Output() updateComplete = new EventEmitter<TravelModel>();

  leastExpensive: any = [
    {name: 'Yes', value: 'Y'},
    {name: 'No', value: 'N'}
  ];


  name = 'TheFlightForm';

  constructor(private formBuilder: FormBuilder) {
    this.flightForm = formBuilder.group({
      departureairport: ['', Validators.required],
      arrivalairport: ['', Validators.required],
      departuredate: ['', Validators.required],
      arrivaldate: ['', Validators.required],
      cost: ['', Validators.required],
      leastexpensive: ['', Validators.required],
      explanation: ['', Validators.required]

    });
  }
  ngOnInit() {
    this.flightForm.setValue({
      departureairport: this.flight.departureairport
    }); }

  updateFlight() {
    this.updateComplete.emit(this.flight);
  }
}
