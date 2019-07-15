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
import {ExpensesComponent} from './components/expenses/expenses.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { ArchiveComponent } from './components/archive/archive.component';
import {FormsModule} from '@angular/forms';
import {NavbarComponent} from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    // ArchiveComponent,
    AppComponent,
    WelcomeComponent,
    ContractorComponent,
    PurchaseOrdersComponent,
    TravelComponent,
    ExpensesComponent,
    NavbarComponent
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
