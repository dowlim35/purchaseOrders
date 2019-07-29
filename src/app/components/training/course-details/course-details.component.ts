import { Component, OnInit } from '@angular/core';
import {TrainingService} from '../../../services/training.service';
import {NavBarService} from 'src/app/services/navBarService';


@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
  providers: [CourseDetailsComponent]
})
export class CourseDetailsComponent implements OnInit {
  courseName: string;
  startDate: Date;
  endDate: Date;
  location: string;
  hotelFee: number;
  delegates: number;
  unitCost: number;
  totalCost: number;

  hotelIncluded = true;
  constructor(private tService: TrainingService, private navBarService: NavBarService) {
    this.tService.setCourseDetails(this.courseName, this.startDate, this.endDate, this.location,
      this.hotelFee, this.delegates, this.unitCost, this.totalCost);
    this.navBarService.setPageName("Course Details");
  }

  ngOnInit() {
  }

  saveCourseDetails() {
    this.tService.setCourseDetails(this.courseName, this.startDate, this.endDate, this.location,
      this.hotelFee, this.delegates, this.unitCost, this.totalCost);
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
