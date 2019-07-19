import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  hotelIncluded = true;
  constructor() { }

  ngOnInit() {
  }


  toggleHotelIncluded() {
    if ( this.hotelIncluded === false) {
      this.hotelIncluded = true;
      document.getElementById('yesButton').style.backgroundColor = 'darkslateblue';
      document.getElementById('noButton').style.backgroundColor = 'white';
    } else {
      this.hotelIncluded = false;
      document.getElementById('noButton').style.backgroundColor = 'darkslateblue';
      document.getElementById('yesButton').style.backgroundColor = 'white';
    }

  }


}
