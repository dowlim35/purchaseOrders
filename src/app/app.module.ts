import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {routes} from './routes';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ContractorComponent} from './components/contractors/contractor.component';
import {PurchaseOrderFormComponent} from './components/purchase-order-form/purchase-order-form.component';
import {TravelComponent} from './components/travel/travel.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CompanyDetailsComponent} from './components/training/company-details/company-details.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {PurchaseOrderViewerComponent} from "./components/purchase-order-viewer/purchase-order-viewer.component";
import {FlightDetailsComponent} from './components/travel/flightdetails/flightdetails.component';
import {HotelCarDetailsComponent} from './components/travel/hotelcardetails/hotelcardetails.component';
import {TravelOverviewComponent} from './components/travel/traveloverview/traveloverview.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { ProgressionButtonsComponent } from './components/progression-buttons/progression-buttons.component';
import { CourseDetailsComponent } from './components/training/course-details/course-details.component';
import {MatRadioModule} from '@angular/material/radio';
import { PaymentDetailsComponent } from './components/training/payment-details/payment-details.component';
import { ArchiveRowComponent } from './components/archive/archive-row/archive-row.component';
import { DraftArchiveComponent } from './components/draft-archive/draft-archive.component';
import { DraftArchiveRowComponent } from './components/draft-archive/draft-archive-row/draft-archive-row.component';
import { SubmissionOverviewComponent } from './components/training/submission-overview/submission-overview.component';
import { ArchivePreviewComponent } from './components/archive-preview/archive-preview.component';
import { ArchivePreviewRowComponent } from './components/archive-preview/archive-preview-row/archive-preview-row.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ContractorComponent,
    PurchaseOrderFormComponent,
    TravelComponent,
    CompanyDetailsComponent,
    NavbarComponent,
    PurchaseOrderViewerComponent,
    FlightDetailsComponent,
    HotelCarDetailsComponent,
    TravelOverviewComponent,
    ArchiveComponent,
    ProgressionButtonsComponent,
    CourseDetailsComponent,
    PaymentDetailsComponent,
    ArchiveRowComponent,
    DraftArchiveComponent,
    DraftArchiveRowComponent,
    SubmissionOverviewComponent,
    ArchivePreviewComponent,
    ArchivePreviewRowComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
