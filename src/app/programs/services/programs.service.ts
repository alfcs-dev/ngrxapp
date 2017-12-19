import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/observable/throw';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: `Token ${environment.token}`
  })
};

@Injectable()
export class ProgramsService {
  constructor(private http: HttpClient) {}

  getPrograms(): Observable<any[]> {
    return this.http
      .get<any[]>(environment.programsUrl, httpOptions)
      .pipe(catchError((error: any) => of(error)));
  }
}
