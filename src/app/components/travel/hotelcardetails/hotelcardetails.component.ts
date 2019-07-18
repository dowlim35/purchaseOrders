import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TravelModel} from '../../../model/travelmodel';

@Component({
  selector: 'app-hotelcardetails',
  templateUrl: './hotelcardetails.component.html',
  styleUrls: ['./hotelcardetails.component.css']
})
export class HotelCarDetailsComponent implements OnInit {
  hotelForm: FormGroup;
  @Input() hotel: TravelModel;
  @Output() updateComplete = new EventEmitter<TravelModel>();


  otherCar = false;
  enterpriseCar = false;
  name = 'TheHotelForm';

  constructor(private formBuilder: FormBuilder) {
    this.hotelForm = formBuilder.group({
      hotelname: ['', Validators.required],
      Cost: ['', Validators.required],
      arrivaldate: ['', Validators.required],
      departuredate: ['', Validators.required],
      enterprisecar: ['', Validators.required],
      car: ['', Validators.required],
      pickupdate: ['', Validators.required],
      dropdate: ['', Validators.required],
      returnto: ['', Validators.required],
      costperday: ['', Validators.required]

    });
  }
  ngOnInit() {
    this.hotelForm.setValue({
      departureairport: this.hotel.departureairport
    }); }

  updateHotel() {
    this.updateComplete.emit(this.hotel);
  }


  toggleOtherCar() {
    console.log('TOGGLE IS WORKIN');
    if ( this.otherCar === false && this.enterpriseCar === false) {
      this.otherCar = true;
    } else if ( this.otherCar === false && this.enterpriseCar === true) {
      this.otherCar = true;
      this.enterpriseCar = false;
    } else {
      this.otherCar = false;
    }

  }
  toggleEnterpriseCar() {
    console.log('TOGGLE IS WORKIN');
    if ( this.enterpriseCar === false && this.otherCar === false) {
      this.enterpriseCar = true;
    } else if ( this.otherCar === true && this.enterpriseCar === false) {
      this.otherCar = false;
      this.enterpriseCar = true;
    } else {
      this.enterpriseCar = false;
    }

  }
}
