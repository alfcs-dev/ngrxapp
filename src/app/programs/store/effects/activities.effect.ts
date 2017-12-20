import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as activitiesActions from '../actions/activities.actions';
import * as services from '../../services';

@Injectable()
export class ActivitiesEffects {
  constructor(
    private actions$: Actions,
    private activitiesService: services.ActivitiesService
  ) {}

  @Effect()
  loadActivities$ = this.actions$
    .ofType(activitiesActions.LOAD_ACTIVITIES)
    .pipe(
      switchMap(() => {
        return this.activitiesService
          .getActivities()
          .pipe(
            map(
              activities =>
                new activitiesActions.LoadActivitiesSuccess(activities)
            ),
            catchError(error =>
              of(new activitiesActions.LoadActivitiesFail(error))
            )
          );
      })
    );
}
