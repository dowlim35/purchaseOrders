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
  startDate = Date;
  endDate = Date;
  location = '';
  hotelFee = 0;
  delegates = 0;
  unitCost = 0;
  totalCost = 0;

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


  // setContactName(contactName) {
    //   this.companyName = contactName;
    // }
    // getContactName() {
    //   return this.contactName;
    // }
    // setCompanyName(companyName) {
    //   this.companyName = companyName;
    // }
    // getCompanyName() {
    //   return this.companyName;
    // }
    // setAddress(address) {
    //   this.address = address;
    // }
    // getAddress() {
    //   return this.address;
    // }
    // setEmail(email) {
    //   this.email = email;
    // }
    // getEmail() {
    //   return this.email;
    // }
    // setTelephoneNo(telephoneNo) {
    //   this.telephoneNo = telephoneNo;
    // }
    // getTelephoneNo() {
    //   return this.telephoneNo;
    // }
    // setMobileNo(mobileNo) {
    //   this.mobileNo = mobileNo;
    // }
    // getMobileNo() {
    //   return this.mobileNo;
    // }
    // setWebsite(website) {
    //   this.website = website;
    // }
    // getWebsite() {
    //   return this.website;
    // }


}
