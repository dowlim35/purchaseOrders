import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from '../app.component';
import {HeaderComponent} from '../components/header/header.component';

const routes: Routes = [
  {
    path: '',
  component: AppComponent,
  },
  {
    path: 'page1',
  component: HeaderComponent
  },
  // {
  //   path: '',
  // component:
  // },
  // {
  //   path: '',
  // component:
  // },
  // {
  //   path: '',
  //   component:
  // },

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
