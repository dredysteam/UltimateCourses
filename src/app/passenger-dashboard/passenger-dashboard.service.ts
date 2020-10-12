import { Injectable } from '@angular/core';
import { Passenger } from './models/passenger.interface';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
// import 'rxjs/add/observable/throw';

const LOCAL_API: string = 'http://localhost:3000';

@Injectable()
export class PassengerDashboardService {
  constructor(private http: HttpClient) {}

  getPassengers(): Observable<Passenger[]> {
    return this.http.get(`${LOCAL_API}/passengers`).pipe(
      map((response: any) => {
        return response;
      })
      // catchError((error: any) => Observable.throw(error))
    );
  }

  getPassenger(id: number): Observable<Passenger> {
    return this.http.get(`${LOCAL_API}/passengers/${id}`).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http
      .put(`${LOCAL_API}/passengers/${passenger.id}`, passenger, httpOptions)
      .pipe(
        map((response: any) => {
          return response;
        })
        // catchError((error: any) => Observable.throw(error))
      );
  }
  removePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http.delete(`${LOCAL_API}/passengers/${passenger.id}`).pipe(
      map((response: any) => {
        return response;
      })
      // catchError((error: any) => Observable.throw(error))
    );
  }
}
