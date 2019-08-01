import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TravelModel} from '../../../model/travelmodel';
import {TravelService} from '../../../services/travel.service';

@Component({
  selector: 'app-hotelcardetails',
  templateUrl: './hotelcardetails.component.html',
  styleUrls: ['./hotelcardetails.component.css'],
  providers: [HotelCarDetailsComponent]
})
export class HotelCarDetailsComponent implements OnInit {
  hotelForm: FormGroup;

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
  numberofdays: number;

  enterpriseIncluded = false;
  carIncluded = false;

  @Input() hotel: TravelModel;
  @Output() updateComplete = new EventEmitter<TravelModel>();


  // otherCar = false;
  // enterprisecar = false;
  name = 'TheHotelForm';

  constructor(private toService: TravelService){
    this.hotelname = toService.hotelname;
    this.cost = toService.cost;
    this.arrivaldate = toService.arrivaldate;
    this.departuredate = toService.departuredate;
    this.enterprisecar = toService.enterprisecar;
    this.car = toService.car;
    this.numberofdays = toService.numberofdays;
  }

  ngOnInit() {}
  updateHotel() {this.toService.setHotelDetails(this.hotelname, this.cost, this.arrivaldate, this.departuredate,this.enterprisecar, this.car, this.pickupdate, this.dropdate, this.returnto, this.costperday)}

  toggleEnterpriseIncluded() {
    if ( this.enterpriseIncluded === false) {
      this.enterpriseIncluded = true;
      document.getElementById('yesButton').style.backgroundColor = 'darkslateblue';
      document.getElementById('noButton').style.backgroundColor = 'white';
    } else {
      this.enterpriseIncluded = false;
      document.getElementById('noButton').style.backgroundColor = 'darkslateblue';
      document.getElementById('yesButton').style.backgroundColor = 'white';
    }

  }

  toggleCarIncluded() {
    if ( this.carIncluded === false) {
      this.carIncluded = true;
      document.getElementById('yesButton').style.backgroundColor = 'darkslateblue';
      document.getElementById('noButton').style.backgroundColor = 'white';
    } else {
      this.carIncluded = false;
      document.getElementById('noButton').style.backgroundColor = 'darkslateblue';
      document.getElementById('yesButton').style.backgroundColor = 'white';
    }

  }

  // {
  //   this.hotelForm = formBuilder.group({
  //     hotelname: ['', Validators.required],
  //     cost: ['', Validators.required],
  //     arrivaldate: ['', Validators.required],
  //     departuredate: ['', Validators.required],
  //     enterprisecar: ['', Validators.required],
  //     car: ['', Validators.required],
  //     pickupdate: ['', Validators.required],
  //     dropdate: ['', Validators.required],
  //     returnto: ['', Validators.required],
  //     costperday: ['', Validators.required]
  //
  //   });
  // }

  // toggleOtherCar() {
  //   console.log('TOGGLE IS WORKIN');
  //   if ( this.otherCar === false && this.enterpriseCar === false) {
  //     this.otherCar = true;
  //   } else if ( this.otherCar === false && this.enterpriseCar === true) {
  //     this.otherCar = true;
  //     this.enterpriseCar = false;
  //   } else {
  //     this.otherCar = false;
  //   }
  //
  // }
  // toggleEnterpriseCar() {
  //   console.log('TOGGLE IS WORKIN');
  //   if ( this.enterpriseCar === false && this.otherCar === false) {
  //     this.enterpriseCar = true;
  //   } else if ( this.otherCar === true && this.enterpriseCar === false) {
  //     this.otherCar = false;
  //     this.enterpriseCar = true;
  //   } else {
  //     this.enterpriseCar = false;
  //   }
  //
  // }
}
