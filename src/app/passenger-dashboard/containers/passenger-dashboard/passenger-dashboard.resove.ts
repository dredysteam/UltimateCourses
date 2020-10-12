import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Passenger } from '../../models/passenger.interface';

@Injectable()
export class PassengerDashboardResolve implements Resolve<Passenger[]> {
  constructor(private passengerDashboardService: PassengerDashboardService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.passengerDashboardService.getPassengers();
  }
}
