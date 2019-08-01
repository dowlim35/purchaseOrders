import { Component, OnInit} from '@angular/core';
import {ContractorService} from 'src/app/services/contractor.service';
import {HistoryService} from 'src/app/services/history.service';
import {Contractor} from 'src/app/model/Contractor';

@Component({
  selector: 'app-contractor',
  templateUrl: './contractor.component.html',
  styleUrls: ['./contractor.component.css'],
  providers: [ContractorComponent]
})
export class ContractorComponent implements OnInit {
  contactName: string;
  companyName: string;
  address: string;
  telephoneNumber: number;
  faxNo: number;
  mobileNumber: number;
  website: string;
  email: string;
  date: Date;
  contractorName: string;
  startDateOfContract: Date;
  startDateOfPO: Date;
  contractWorkingDays: number;
  POWorkingDays: number;
  dailyCostToLIT: number;
  workingHoursPerDay: number;
  results;
  projectName: string;
  SDLName: string;
  contractors: Contractor[];
  details: Contractor;
  archive2: Contractor[];

  constructor(private contractorService: ContractorService, private archiveService: HistoryService) {
    this.results = this.contractorService.getDetails();
    this.email = this.contractorService.getEmail();
    this.contactName = this.contractorService.getContactName();
    this.companyName = this.contractorService.getCompanyName();
    this.address = this.contractorService.getAddress();
    this.telephoneNumber = this.contractorService.getTelephoneNumber();
    this.faxNo = this.contractorService.getFaxNo();
    this.mobileNumber = this.contractorService.getMobileNumber();
    this.website = this.contractorService.getWebsite();
    this.date = this.contractorService.getDate();
    this.contractorName = this.contractorService.getContractorName();
    this.startDateOfContract = this.contractorService.getStartDateOfContract();
    this.startDateOfPO = this.contractorService.getStartDateOfPO();
    this.contractWorkingDays = this.contractorService.getContractWorkingDays();
    this.POWorkingDays = this.contractorService.getPOWorkingDays();
    this.dailyCostToLIT = this.contractorService.getDailyCostToLIT();
    this.workingHoursPerDay = this.contractorService.getWorkingHoursPerDay();
  }
  ngOnInit() {

  }

  updateContractorPO()
   {
   this.contractorService.setContactName(this.contactName);
   this.contractorService.setCompanyName(this.companyName);
   this.contractorService.setAddress(this.address);
   this.contractorService.setFaxNo(this.faxNo);
   this.contractorService.setTelephoneNumber(this.telephoneNumber);
   this.contractorService.setWebsite(this.website);
   this.contractorService.setDate(this.date);
   this.contractorService.setContractorName(this.contractorName);
   this.contractorService.setContractWorkingDays(this.contractWorkingDays);
   this.contractorService.setEmail(this.email);
   this.contractorService.setDailyCostToLIT(this.dailyCostToLIT);
   this.contractorService.setPOWorkingDays(this.POWorkingDays);
   this.contractorService.setContractWorkingDays(this.contractWorkingDays);
   this.contractorService.setWorkingHoursPerDay(this.workingHoursPerDay);
   this.contractorService.setSDLName(this.SDLName);
   this.contractorService.setProjectName(this.projectName);
   this.contractorService.setMobileNumber(this.mobileNumber);
   this.contractorService.setStartDateOfContract(this.startDateOfContract);
   this.contractorService.setStartDateOfPO(this.startDateOfPO);
   }
  //
  // // postData(): void {
  //   this.results = this.contractorService.getDetails();
  //   this.contractorService.postContractorPurchaseOrders((this.results)
  //     .subscribe(contractors => this.contractors.push(contractors));
  //   this.details = {contactName: " ",companyName: " ", address: " ", telephoneNumber: 123, faxNo: 12342, mobileNum: 0, website: "og@lit.co.uk",date: new Date(),contractorName: " ",startDateOfContract: new Date(), startDateOfPO: new Date(), contractorWorkingDays: 3, POWorkingDays: 3, workingHoursPerDay: 7};
  //   this.archiveService.putContractor(this.details)
  //     .subscribe(archive1 => this.archive2.push(archive1));
  // }
}
