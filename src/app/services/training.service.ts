import {Training} from '../model/training';
import {Injectable} from '@angular/core';
import {del} from 'selenium-webdriver/http';
@Injectable({
  providedIn: 'root'
})

export class TrainingService {
  // Company details
  contactName = '';
  companyName = '';
  address = '';
  email = '';
  telephoneNo = '';
  mobileNo = '';
  website = '';
  // Course details
  courseName = '';
  startDate = new Date();
  endDate = new Date();
  location = '';
  hotelFee = 0;
  delegates = 0;
  unitCost = 0;
  totalCost = 0;
  // Payment details
  creditCard = '';
  subAccount = '';
  delegatesPaid = 0;


  setCompanyDetails(contactName, companyName, address, email, telephoneNo, mobileNo, website) {
    this.companyName = contactName;
    this.companyName = companyName;
    this.address = address;
    this.email = email;
    this.telephoneNo = telephoneNo;
    this.mobileNo = mobileNo;
    this.website = website;
  }

  setCourseDetails(courseName, startDate, endDate, location, hotelFee, delegates, unitCost, totalCost) {
    this.courseName = courseName;
    this.startDate = startDate;
    this.endDate = endDate;
    this.location = location;
    this.hotelFee = hotelFee;
    this.delegates = delegates;
    this.unitCost = unitCost;
    this.totalCost = totalCost;
  }

  setPaymentDetails(creditCard, subAccount, delegatesPaid) {
    this.creditCard = creditCard;
    this.subAccount = subAccount;
    this.delegatesPaid = delegatesPaid;
  }


}
