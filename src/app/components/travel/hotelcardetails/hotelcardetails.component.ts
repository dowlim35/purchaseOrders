import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hotelcardetails',
  templateUrl: './hotelcardetails.component.html',
  styleUrls: ['./hotelcardetails.component.css']
})
export class HotelCarDetailsComponent implements OnInit {
  otherCar = false;
  enterpriseCar = false;
  constructor() { }
  ngOnInit() {
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
