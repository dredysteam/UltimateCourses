import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

//containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

//components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';

//services
import { PassengerDashboardService } from './passenger-dashboard.service';
//directives
import { CreditCardDirective } from './directives/credit-card.directive';
//resolves
import { PassengerDashboardResolve } from './containers/passenger-dashboard/passenger-dashboard.resove';

// Topics : Input, Output, Services , smart components, dump components, Resolves

const routes: Routes = [
  {
    path: 'passengers',
    children: [
      {
        path: '',
        component: PassengerDashboardComponent,
        resolve: {
          passengers: PassengerDashboardResolve,
        },
      },
      {
        path: ':id',
        component: PassengerViewerComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerViewerComponent,
    PassengerFormComponent,
    CreditCardDirective,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  exports: [],
  providers: [PassengerDashboardService, PassengerDashboardResolve],
})
export class PassengerDashboardModule {}
