import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as rootStore from '../../../store';
import * as activitiesActions from '../actions/activities.actions';
import * as services from '../../services';

@Injectable()
export class ActivitiesEffects {
  constructor(
    private actions$: Actions,
    private activitiesService: services.ActivitiesService
  ) {}

  @Effect()
  loadActivities$ = this.actions$.pipe(
    ofType(activitiesActions.LOAD_ACTIVITIES),
    switchMap(() => {
      return this.activitiesService.getActivities().pipe(
        map(activities => new activitiesActions.LoadActivitiesSuccess(activities)),
        catchError(error => of(new activitiesActions.LoadActivitiesFail(error)))
      );
    })
  );

  @Effect()
  createAtivity$ = this.actions$.pipe(
    ofType(activitiesActions.CREATE_ACTIVITY),
    map((action: activitiesActions.CreateActivity) => action.payload),
    switchMap(activity =>
      this.activitiesService.createActivity(activity).pipe(
        map(
          createdActivity => new activitiesActions.CreateActivitySuccess(createdActivity)
        ),
        catchError(error => of(new activitiesActions.CreateActivityFail(error)))
      )
    )
  );

  @Effect()
  createActivitySuccess$ = this.actions$.pipe(
    ofType(activitiesActions.CREATE_ACTIVITY_SUCCESS),
    map((action: activitiesActions.CreateActivitySuccess) => action.payload),
    map(activity => new rootStore.Go({ path: ['/programs'] }))
  );
}
