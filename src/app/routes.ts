import {Routes} from '@angular/router';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {AppComponent} from './app.component';
import {ContractorComponent} from './components/contractors/contractor.component';
import {PurchaseOrderFormComponent} from './components/purchase-order-form/purchase-order-form.component';
import {TravelComponent} from './components/travel/travel.component';
import {TrainingComponent} from './components/training/training.component';
import {PurchaseOrderViewerComponent} from "./components/purchase-order-viewer/purchase-order-viewer.component";
import {FlightDetailsComponent} from './components/travel/flightdetails/flightdetails.component';
import {HotelCarDetailsComponent} from './components/travel/hotelcardetails/hotelcardetails.component';
import {TravelOverviewComponent} from './components/travel/traveloverview/traveloverview.component';
import {ArchiveComponent} from './components/archive/archive.component';

export const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'contractor', component: ContractorComponent},
  {path: 'purchaseOrders', component: PurchaseOrderFormComponent},
  {path: 'travel', component: TravelComponent},
  {path: 'training', component: TrainingComponent},
  {path: 'purchaseOrderSummary', component: PurchaseOrderViewerComponent },
  {path: 'flightdetails', component: FlightDetailsComponent},
  {path: 'hotelcardetails', component: HotelCarDetailsComponent},
  {path: 'traveloverview', component: TravelOverviewComponent},
  {path: 'archive', component: ArchiveComponent}
];
