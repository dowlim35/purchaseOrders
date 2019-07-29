import { Component, OnInit } from '@angular/core';
import {TrainingService} from '../../../services/training.service';

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

  constructor(private tService: TrainingService) {
    this.tService.setPaymentDetails(this.creditCard, this.subAccount, this.delegates);

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
