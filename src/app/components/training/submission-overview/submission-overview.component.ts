import {Component} from '@angular/core';
import {TrainingService} from '../../../services/training.service';
import {Training} from '../../../model/training';
import {AccountType} from '../../../../assets/enums/AccountType';


@Component({
  selector: 'app-submission-overview',
  templateUrl: './submission-overview.component.html',
  styleUrls: ['./submission-overview.component.css'],
  providers: [SubmissionOverviewComponent]
})
export class SubmissionOverviewComponent {
  // Company details
  contactName: string;
  companyName: string;
  address: string;
  email: string;
  telephoneNo: string;
  mobileNo: string;
  website: string;

  // Course details
  courseName: string;
  startDate: Date;
  endDate: Date;
  location: string;
  hotelFee: number;
  delegates: number;
  unitCost: number;
  totalCost: number;

  // Payment details
  creditCard: string;
  subAccount: string;
  delegatesPaid: number;

  trainings: Training[];
  results;

  constructor(private tService: TrainingService) {

    // Company details
    this.contactName = tService.contactName;
    this.companyName = tService.companyName;
    this.address = tService.address;
    this.email = tService.email;
    this.telephoneNo = tService.telephoneNo;
    this.mobileNo = tService.mobileNo;
    this.website = tService.website;
    // Course details
    this.courseName = tService.courseName;
    this.startDate = tService.startDate;
    this.endDate = tService.endDate;
    this.location = tService.location;
    this.hotelFee = tService.hotelFee;
    this.delegates = tService.delegates;
    this.unitCost = tService.unitCost;
    this.totalCost = tService.totalCost;
    // Payment details
    this.creditCard = tService.creditCard;
    this.subAccount = tService.subAccount;
    this.delegatesPaid = tService.delegatesPaid;

  }

  postData(): void {
    this.results = this.tService.getAllDetails();
    this.tService.postTraining(this.results)
      .subscribe(training => this.trainings.push(training));
  }
}
