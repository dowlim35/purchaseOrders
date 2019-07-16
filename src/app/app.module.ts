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
import {TrainingComponent} from './components/training/training.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {PurchaseOrderViewerComponent} from "./components/purchase-order-viewer/purchase-order-viewer.component";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ContractorComponent,
    PurchaseOrderFormComponent,
    TravelComponent,
    TrainingComponent,
    NavbarComponent,
    PurchaseOrderViewerComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
