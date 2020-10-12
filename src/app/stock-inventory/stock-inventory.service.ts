import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Product } from './models/product.interface';
import { Item } from './models/item.interface';
import { URLSearchParams } from 'url';

const LOCAL_API: string = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class StockInventoryService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get(`${LOCAL_API}/products`).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  getCartItems(): Observable<Item[]> {
    return this.http.get(`${LOCAL_API}/cart`).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
  // validacion asincrona
  // checkBranch(id: string): Observable<boolean> {
  //   let search = new URLSearchParams();
  //   search.set('id', id);
  //   // FALTA INLCUIR EN EL OBJETO {search}
  //   return this.http.get(`${LOCAL_API}/branches`, {search}).pipe(
  //     map((response: any) => {
  //       return response;
  //     }),
  //     map((response: any[]) => {
  //       return !!response;
  //     })
  //   );
  // }
}
