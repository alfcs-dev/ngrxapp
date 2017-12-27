import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/observable/throw';
import { Activity } from '../models/activity.model';

const headers = new HttpHeaders({
  Authorization: `Token ${environment.token}`
});

const httpOptions = { headers };

@Injectable()
export class ActivitiesService {
  constructor(private http: HttpClient) {}

  getActivities(): Observable<Activity[]> {
    return this.http
      .get<Activity[]>(environment.activitiesUrl, httpOptions)
      .pipe(catchError((error: any) => of(error)));
  }

  createActivity(activity: Activity): Observable<Activity> {
    return this.http
      .post<Activity>(environment.activitiesUrl, activity, httpOptions)
      .pipe(catchError((error: any) => of(error)));
  }

  deleteActivity(activity: Activity): Observable<Activity> {
    return this.http
      .request<Activity>('DELETE', environment.activitiesUrl, {
        ...httpOptions,
        body: activity
      })
      .pipe(catchError((error: any) => of(error)));
  }
}
