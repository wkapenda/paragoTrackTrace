import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TrackTraceService {
  constructor(private httpClient: HttpClient) {}

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('error--->', error);
    return throwError(() => new Error(error.message));
  }

  getPackageHistory(): Observable<any> {
    return this.httpClient
      .get<any>(`${environment.apiUrl}api/package`)
      .pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));
  }
}
