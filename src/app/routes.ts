import {Routes} from '@angular/router';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {AppComponent} from './app.component';
import {ContractorComponent} from './components/contractors/contractor.component';
import {PurchaseOrderFormComponent} from './components/purchase-order-form/purchase-order-form.component';
import {TravelComponent} from './components/travel/travel.component';
import {TrainingComponent} from './components/training/training.component';
import {PurchaseOrderViewerComponent} from "./components/purchase-order-viewer/purchase-order-viewer.component";

export const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'contractor', component: ContractorComponent},
  {path: 'purchaseOrders', component: PurchaseOrderFormComponent},
  {path: 'travel', component: TravelComponent},
  {path: 'training', component: TrainingComponent},
  {path: 'purchaseOrderSummary', component: PurchaseOrderViewerComponent }
];
