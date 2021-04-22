import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../../environments/environment.prod";
import { catchError, retry } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public api = environment.urlServer

  constructor(
    private http: HttpClient,
  ) { }

  post(urlApi,data){
    const url = environment.urlServer+urlApi
    return this.http.post(url, data,)
    .pipe(
      catchError(error => {
          if (error.error instanceof ErrorEvent) {
              console.log(`Error: ${error.error.message}`);
          } else {
              console.log(error.error);
              return of (error.error)
          }
          return of([]);
      })
  );
  }

  get(urlApi){
    const url = environment.urlServer+urlApi
    return this.http.get(url)
    .pipe(
      catchError(error => {
          if (error.error instanceof ErrorEvent) {
              console.log(`Error: ${error.error.message}`);
          } else {
              console.log(error);
              return of (error.error)
          }
          return of([]);
      })
  );
  }
}
