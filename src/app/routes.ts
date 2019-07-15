import {Routes} from '@angular/router';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {AppComponent} from './app.component';
import {ContractorComponent} from './components/contractors/contractor.component';
import {PurchaseOrdersComponent} from './components/purchaseOrders/purchase-orders.component';
import {TravelComponent} from './components/travel/travel.component';
import {ExpensesComponent} from './components/expenses/expenses.component';

export const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'contractor', component: ContractorComponent},
  {path: 'purchaseOrders', component: PurchaseOrdersComponent},
  {path: 'travel', component: TravelComponent},
  {path: 'expenses', component: ExpensesComponent}
];
