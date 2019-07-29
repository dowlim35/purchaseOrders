import { Component, OnInit} from '@angular/core';
import {TrainingService} from '../../../services/training.service';


@Component({
  selector: 'app-training',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css'],
  providers: [CompanyDetailsComponent]

})
export class CompanyDetailsComponent implements OnInit {
  contactName: string;
  companyName: string;
  address: string;
  email: string;
  telephoneNo: string;
  mobileNo: string;
  website: string;

  constructor(private tService: TrainingService) {
    this.tService.setCompanyDetails(this.contactName, this.companyName, this.address, this.email,
      this.telephoneNo, this.mobileNo, this.website);
  }

  ngOnInit() {

  }

  saveContactDetails() {
    this.tService.setCompanyDetails(this.contactName, this.companyName, this.address, this.email,
      this.telephoneNo, this.mobileNo, this.website);

    // this.tService.setContactName(this.contactName);
    // this.tService.setCompanyName(this.companyName);
    // this.tService.setAddress(this.address);
    // this.tService.setEmail(this.email);
    // this.tService.setTelephoneNo(this.telephoneNo);
    // this.tService.setMobileNo(this.mobileNo);
    // this.tService.setWebsite(this.website);
  }

  getName() {
    // console.log(this.tService.getCompanyName());
  }
}
