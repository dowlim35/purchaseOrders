import { Component, OnInit} from '@angular/core';
import {TrainingService} from '../../../services/training.service';

@Component({
  selector: 'app-training',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css'],
  providers: [CompanyDetailsComponent]

})
export class CompanyDetailsComponent implements OnInit {
  companyName: string;
  constructor(private tService: TrainingService) {
    this.companyName = tService.getName();
  }
  ngOnInit() {

  }

  updatePurchaseOrder() {
    this.tService.setName(this.companyName);
  }

  getName() {
    console.log(this.tService.getName());
  }
}
