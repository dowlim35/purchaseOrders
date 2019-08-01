import {Routes} from '@angular/router';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {AppComponent} from './app.component';
import {ContractorComponent} from './components/contractors/contractor.component';
import {PurchaseOrderFormComponent} from './components/purchase-order-form/purchase-order-form.component';
import {TravelComponent} from './components/travel/travel.component';
import {CompanyDetailsComponent} from './components/training/company-details/company-details.component';
import {PurchaseOrderViewerComponent} from './components/purchase-order-viewer/purchase-order-viewer.component';
import {FlightDetailsComponent} from './components/travel/flightdetails/flightdetails.component';
import {HotelCarDetailsComponent} from './components/travel/hotelcardetails/hotelcardetails.component';
import {TravelOverviewComponent} from './components/travel/traveloverview/traveloverview.component';
import {ArchiveComponent} from './components/archive/archive.component';
import {CourseDetailsComponent} from './components/training/course-details/course-details.component';
import {PaymentDetailsComponent} from './components/training/payment-details/payment-details.component';
import {DraftArchiveComponent} from './components/draft-archive/draft-archive.component';
import {SubmissionOverviewComponent} from './components/training/submission-overview/submission-overview.component';
import {LoginComponent} from './components/login/login.component';
import {AdminComponent} from './components/admin/admin-viewer/admin.component';

export const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'contractor', component: ContractorComponent},
  {path: 'purchaseOrders', component: PurchaseOrderFormComponent},
  {path: 'travel', component: TravelComponent},
  {path: 'training', component: CompanyDetailsComponent},
  {path: 'purchaseOrderSummary', component: PurchaseOrderViewerComponent },
  {path: 'flightdetails', component: FlightDetailsComponent},
  {path: 'hotelcardetails', component: HotelCarDetailsComponent},
  {path: 'traveloverview', component: TravelOverviewComponent},
  {path: 'archive', component: ArchiveComponent},
  {path: 'trainingCompanyDetails', component: CompanyDetailsComponent},
  {path: 'trainingCourseDetails', component: CourseDetailsComponent},
  {path: 'trainingPaymentDetails', component: PaymentDetailsComponent},
  {path: 'draft-archive', component: DraftArchiveComponent},
  {path: 'trainingSubmission', component: SubmissionOverviewComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},

];
