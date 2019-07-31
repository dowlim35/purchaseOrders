import {Training} from '../model/training';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export abstract class TrainingService {
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
  results: Training;
  abstract fetchTraining(): Observable<Training[]>;
  abstract postTraining(training): Observable<Training>;

  getAllDetails() {
    this.results = {
      contactName: this.contactName,
      companyName: this.companyName,
      address: this.address,
      email: this.email,
      telephoneNo: this.telephoneNo,
      mobileNo: this.mobileNo,
      website: this.website,
      courseName: this.courseName,
      startDate: this.startDate,
      endDate: this.endDate,
      location: this.location,
      hotelFee: this.hotelFee,
      delegates: this.delegates,
      unitCost: this.unitCost,
      totalCost: this.totalCost,
      creditCard: this.creditCard,
      subAccount: this.subAccount,
      delegatesPaid: this.delegatesPaid};
    return this.results;
  }

  setCompanyDetails(contactName, companyName, address, email, telephoneNo, mobileNo, website) {
    this.contactName = contactName;
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
