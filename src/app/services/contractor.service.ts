import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Contractor} from '../model/Contractor';

@Injectable({
  providedIn: 'root'})

export abstract class ContractorService {

  contactName: '';
  companyName: '';
  address: string;
  telephoneNumber: number;
  faxNo: number;
  mobileNumber: number;
  website: '';
  date: Date;
  contractorName: '';
  startDateOfContract: Date;
  startDateOfPO: Date;
  contractWorkingDays: number;
  POWorkingDays: number;
  dailyCostToLIT: number;
  workingHoursPerDay: number;
  projectName: '';
  SDLName: '';
  email: ' ';

  results: Contractor;
  abstract fetchContractorPurchaseOrders(): Observable<Contractor[]>;
  abstract postContractorPurchaseOrders(purchases): Observable<Contractor>;





  getDetails() {
    this.results = {
      email: this.email,
      contactName: this.contactName,
      companyName: this.companyName,
      address: this.address,
      telephoneNumber: this.telephoneNumber,
      faxNo: this.faxNo,
    mobileNumber: this.mobileNumber,
    website: this.website,
    date: this.date,
    contractorName: this.contractorName,
    startDateOfContract: this.startDateOfContract,
    startDateOfPO: this.startDateOfPO,
    contractWorkingDays: this.contractWorkingDays,
    POWorkingDays: this.POWorkingDays,
    dailyCostToLIT: this.dailyCostToLIT,
    workingHoursPerDay: this.workingHoursPerDay,
      projectName: this.projectName,
    SDLName: this.SDLName};

    return this.results;
  }

  setStartDateOfPO(startdateOfPO)
  {
    this.startDateOfPO=this.startDateOfPO;
  }

  setStartDateOfContract(startDateOfContract)
  {
    this.startDateOfContract = startDateOfContract;
  }
  setSDLName(SDLName)
  {
    this.SDLName = SDLName;
  }
  setPOWorkingDays(POWorkingDays)
  {
    this.POWorkingDays = POWorkingDays;
  }
  setDailyCostToLIT(dailyCostToLIT)
  {
    this.dailyCostToLIT = dailyCostToLIT;
  }
  setEmail(email)
  {
    this.email = email;
  }
  setContactName(contactName)
  {
    this.contactName = contactName;
  }

  setCompanyName(companyName)
  {
    this.companyName = companyName;
  }

  setAddress(address)
  {
    this.address = address;
  }

  setTelephoneNumber(telephoneNumber)
  {
    this.telephoneNumber = telephoneNumber;
  }

  setFaxNo(faxNo)
  {
    this.faxNo = faxNo;
  }
  setWorkingHoursPerDay(workingHoursPerDay)
  {
    this.workingHoursPerDay = workingHoursPerDay;
  }

  getEmail()
  {
    return this.email;
  }

  setWebsite(website)
  {
    this.website = website;
  }
  setDate(date)
  {
    this.date = date;
  }
  setContractorName(contractorName)
  {
    this.contractorName=contractorName;
  }
  setContractWorkingDays(contractWorkingDays)
  {
    this.contractWorkingDays = contractWorkingDays;
  }

  setProjectName(projectName)
  {
    this.projectName = projectName;
  }

  setMobileNumber(mobileNumber)
  {
    this.mobileNumber = mobileNumber;
  }

  setDetails(contactName, companyName, address, telephoneNumber, faxNo, mobileNumber, website, date, contractorName, startDateOfContract, startDateOfPO,
             contractWorkingDays, POworkingDays, dailyCostToLIT, workingHoursPerDay,) {
   this.contactName = contactName;
   this.companyName = companyName;
   this.address = address;
   this.telephoneNumber = telephoneNumber;
   this.faxNo = faxNo;
   this.mobileNumber = mobileNumber;
   this.website = website;
   this.date = date;
   this.contractorName = contractorName;
   this.startDateOfPO = startDateOfPO;
   this.startDateOfContract = startDateOfContract;
   this.contractWorkingDays = contractWorkingDays;
   this.POWorkingDays = POworkingDays;
   this.dailyCostToLIT = dailyCostToLIT;
   this.workingHoursPerDay = workingHoursPerDay;
  }

  getContactName() {return this.contactName;}
  getCompanyName() {return this.companyName;}
  getAddress() {return this.address}
  getTelephoneNumber() {return this.telephoneNumber;}
  getFaxNo() {return this.faxNo;}
  getMobileNumber() {return this.mobileNumber;}
  getWebsite() {return this.website;}
  getDate() {return this.date;}
  getContractorName() {return this.contractorName;}
  getStartDateOfContract() {return this.startDateOfContract;}
  getStartDateOfPO() {return this.startDateOfPO;}
  getPOWorkingDays() {return this.POWorkingDays;}
  getDailyCostToLIT() {return this.dailyCostToLIT;}
  getWorkingHoursPerDay() {return this.workingHoursPerDay;}
  getContractWorkingDays() {return this.contractWorkingDays;}
  getProjectName() {return this.projectName;}
  getSDLName(){ return this.SDLName;}

}
