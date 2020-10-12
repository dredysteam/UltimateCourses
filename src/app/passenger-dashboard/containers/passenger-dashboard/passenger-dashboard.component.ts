import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.css'],
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];
  // implementacion de resolve
  //  data: Observable<{ passengers: Passenger[] }> = this.route.data;
  // data: Observable<Passenger[]> = this.route.data.pluck('passengers');

  constructor(
    private passengerService: PassengerDashboardService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.passengerService.getPassengers().subscribe((data: Passenger[]) => {
    //   this.passengers = data;
    // });
    this.route.data.subscribe((data: any) => {
      this.passengers = data.passengers;
      console.log(data.passengers);
    });
  }

  handleRemove(event: Passenger) {
    this.passengerService
      .removePassenger(event)
      .subscribe((data: Passenger) => {
        console.log('Passenger Deleted', event);
        this.passengers = this.passengers.filter((passenger: Passenger) => {
          return passenger.id !== event.id;
        });
      });
  }

  handleEdit(event: Passenger) {
    this.passengerService
      .updatePassenger(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.map((passenger: Passenger) => {
          if (passenger.id === event.id) {
            passenger = Object.assign({}, passenger, event);
          }
          return passenger;
        });
      });
  }
  handleView(event: Passenger) {
    this.router.navigate(['/passengers', event.id]);
  }
}
