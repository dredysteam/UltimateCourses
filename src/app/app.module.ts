import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

//custom modules
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
import { AuthModule } from './auth/auth.module';
import { FilesDashboardModule } from './files-dashboard/files-dashboard.module';
import { StockInventoryModule } from './stock-inventory/stock-inventory.module';

// Topics: Navigation, 2 router-outlet inside app.component.html

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent,
  //   pathMatch: 'full',
  // },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
  // {
  //   path: 'files',
  //   loadChildren:
  //     './files-dashboard/files-dashboard.module#FilesDashboardModule',
  // },
];

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [
    // angular modules
    FlexLayoutModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    // custom modules
    PassengerDashboardModule,
    AuthModule,
    FilesDashboardModule,
    StockInventoryModule,
    //
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
