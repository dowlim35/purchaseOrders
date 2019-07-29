import { Component, OnInit } from '@angular/core';
import {TrainingService} from '../../../services/training.service';
import {NavBarService} from 'src/app/services/navBarService';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css'],
  providers: [PaymentDetailsComponent]

})
export class PaymentDetailsComponent implements OnInit {
  creditCard: string;
  subAccount: string;
  delegates: number;

  constructor(private tService: TrainingService, private navBarService: NavBarService) {
    this.tService.setPaymentDetails(this.creditCard, this.subAccount, this.delegates);
    this.navBarService.setPageName("Payment Details");
  }

  ngOnInit() {
  }

  saveContactDetails() {
    this.tService.setPaymentDetails(this.creditCard, this.subAccount, this.delegates);
  }
  // getNumOfCreditCards() {
  //   return document.getElementById('numOfCreditCards');
  // }

}
