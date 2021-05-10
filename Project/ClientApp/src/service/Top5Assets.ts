import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { EndpointService } from '../shared/endpoints.service';
import { Top5Assets } from '../models/Top5Assets';

@Injectable({
  providedIn: 'root'
})

export class Service {
  constructor(private http: HttpClient) { }

  public get(): Observable<Top5Assets[]> {
    console.log(EndpointService.Top5Assets);
    return this.http.get<Top5Assets[]>(EndpointService.Top5Assets)
      .pipe(
        retry(2),
        catchError(this.handlerError))
  }

  handlerError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    }
    else {
      errorMessage = 'Error code: ${error.status}, ' + 'Message: ${error.message}';
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
