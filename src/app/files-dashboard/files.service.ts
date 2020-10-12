import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Files } from './models/files.interface';
import { map, catchError } from 'rxjs/operators';

const LOCAL_API: string = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  constructor(private http: HttpClient) {}
  getFiles(): Observable<Files[]> {
    return this.http.get(`${LOCAL_API}/files`).pipe(
      map((response: Files[]) => {
        return response;
      })
    );
  }
  getFile(id: number): Observable<Files> {
    return this.http.get(`${LOCAL_API}/files/${id}`).pipe(
      map((response: Files) => {
        return response;
      })
    );
  }
}
