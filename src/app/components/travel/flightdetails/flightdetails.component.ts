import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {TravelModel} from '../../../model/travelmodel';
import {TravelService} from '../../../services/travel.service';


@Component({
  selector: 'app-flightdetails',
  templateUrl: './flightdetails.component.html',
  styleUrls: ['./flightdetails.component.css'],
  providers: [FlightDetailsComponent]
})
export class FlightDetailsComponent implements OnInit {
  // flightForm: FormGroup;
  // @Input() flight: TravelModel;
  // @Output() updateComplete = new EventEmitter<TravelModel>();

  departureairport: string;
  arrivalairport: string;
  departuredateflight: Date;
  arrivaldateflight: Date;
  costflight: number;
  leastexpensive: boolean;
  explanation: string;
  leastExpensive = true;

  // leastExpensive: any = [
  //   {name: 'Yes', value: 'Y'},
  //   {name: 'No', value: 'N'}
  // ];


  name = 'TheFlightForm';

  constructor(private toService: TravelService) {
    this.departureairport = toService.departureairport;
    this.arrivalairport = toService.arrivalairport;
    this.departuredateflight = toService.departuredateflight;
    this.arrivaldateflight = toService.arrivaldateflight;
    this.costflight = toService.costflight;
    this.leastexpensive = toService.leastexpensive;
    this.explanation = toService.explanation;
  }

  // {
  //   this.flightForm = formBuilder.group({
  //     departureairport: ['', Validators.required],
  //     arrivalairport: ['', Validators.required],
  //     departuredate: ['', Validators.required],
  //     arrivaldate: ['', Validators.required],
  //     cost: ['0', Validators.required],
  //     leastexpensive: ['', Validators.required],
  //     explanation: ['', Validators.required]
  //
  //   });
  // }
  ngOnInit() {}

  saveFlightDetails()
  {this.toService.setFlightDetails(this.departureairport, this.arrivalairport, this.departuredateflight, this.arrivaldateflight, this.costflight, this.leastexpensive, this.explanation)
  }

toggleLeastExpensive() {
  if ( this.leastExpensive === false) {
    this.leastExpensive = true;
    document.getElementById('yesButton').style.backgroundColor = 'darkslateblue';
    document.getElementById('noButton').style.backgroundColor = 'white';
  } else {
    this.leastExpensive = false;
    document.getElementById('noButton').style.backgroundColor = 'darkslateblue';
    document.getElementById('yesButton').style.backgroundColor = 'white';
  }
}
}
