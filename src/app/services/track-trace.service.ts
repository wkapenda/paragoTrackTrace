import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PackageHistoryResponse } from '../interfaces/track-trace';

@Injectable({
  providedIn: 'root',
})
export class TrackTraceService {
  constructor(private httpClient: HttpClient) {}

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('error--->', error);
    return throwError(() => new Error(error.message));
  }

  getPackageHistory(
    waybillNumber: string
  ): Observable<PackageHistoryResponse[]> {
    return this.httpClient
      .get<PackageHistoryResponse[]>(`${environment.apiUrl}`, {
        params: { waybillNumber },
      })
      .pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));
  }
}
