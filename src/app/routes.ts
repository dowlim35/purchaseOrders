import {Routes} from '@angular/router';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {AppComponent} from './app.component';
import {ContractorComponent} from './components/contractors/contractor.component';
import {PurchaseOrdersComponent} from './components/purchaseOrders/purchase-orders.component';
import {TravelComponent} from './components/travel/travel.component';
import {TrainingComponent} from './components/training/training.component';

export const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'contractor', component: ContractorComponent},
  {path: 'purchaseOrders', component: PurchaseOrdersComponent},
  {path: 'travel', component: TravelComponent},
  {path: 'training', component: TrainingComponent}
];
