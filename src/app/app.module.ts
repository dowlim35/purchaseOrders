import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {routes} from './routes';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ContractorComponent} from './components/contractors/contractor.component';
import {PurchaseOrdersComponent} from './components/purchaseOrders/purchase-orders.component';
import {TravelComponent} from './components/travel/travel.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {TrainingComponent} from './components/training/training.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FlightDetailsComponent} from './components/travel/flightdetails/flightdetails.component';
import {HotelCarDetailsComponent} from './components/travel/hotelcardetails/hotelcardetails.component';
import {TravelOverviewComponent} from './components/travel/traveloverview/traveloverview.component';
import { ArchiveComponent } from './components/archive/archive.component';


@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    WelcomeComponent,
    ContractorComponent,
    PurchaseOrdersComponent,
    TravelComponent,
    TrainingComponent,
    NavbarComponent,
    FlightDetailsComponent,
    HotelCarDetailsComponent,
    TravelOverviewComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
