import {Component, Input} from '@angular/core';
import {ContractorService} from 'src/app/services/contractor.service';


@Component({
  selector: 'app-contractorViewer',
  templateUrl: './contractorViewer.component.html',
  styleUrls: ['./contractorViewer.component.css'],
  providers: [ContractorViewerComponent]
})
export class ContractorViewerComponent {
  contactName: string;
  companyName: string;
  address: string;
  telephoneNumber: number;
  faxNo: number;
  mobileNumber: number;
  website: string;
  date: Date;
  contractorName: string;
  startDateOfContract: Date;
  startDateOfPO: Date;
  contractWorkingDays: number;
  POWorkingDays: number;
  dailyCostToLIT: number;
  workingHoursPerDay: number;
  email: string;
  results;
  projectName: string;
  SDLName: string;

  constructor(private contractorService: ContractorService) {
    this.contactName = contractorService.contactName;
    this.email = contractorService.email;
    this.companyName = contractorService.companyName;
    this.address = contractorService.address;
    this.telephoneNumber = contractorService.telephoneNumber;
    this.faxNo = contractorService.faxNo;
    this.mobileNumber = contractorService.mobileNumber;
    this.website = contractorService.website;
    this.date = contractorService.date;
    this.contractorName = contractorService.contractorName;
    this.startDateOfContract = contractorService.startDateOfContract;
    this.startDateOfPO = contractorService.startDateOfPO;
    this.contractWorkingDays = contractorService.contractWorkingDays;
    this.POWorkingDays = contractorService.POWorkingDays;
    this.dailyCostToLIT = contractorService.dailyCostToLIT;
    this.workingHoursPerDay = contractorService.workingHoursPerDay;
    this.SDLName = contractorService.SDLName;
    this.projectName = contractorService.projectName;

  }


}
