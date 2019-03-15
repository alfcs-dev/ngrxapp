import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as itemsActions from '../actions/items.actions';
import * as activitiesActions from '../actions/activities.actions';
import * as services from '../../services';
import { Observable } from 'rxjs';

@Injectable()
export class ItemsEffects {
  constructor(
    private actions$: Actions,
    private programsService: services.ProgramsService
  ) {}

  @Effect()
  loadItems$ = this.actions$.pipe(
    ofType(itemsActions.LOAD_ITEMS),
    switchMap(() => {
      return this.programsService.getPrograms().pipe(
        map(programs => new itemsActions.LoadItemsSuccess(programs)),
        catchError(error => of(new itemsActions.LoadItemsFail(error)))
      );
    })
  );

  @Effect()
  loadItemsSuccess$ = this.actions$.pipe(
    ofType(itemsActions.LOAD_ITEMS_SUCCESS),
    map(() => new activitiesActions.LoadActivities())
  );
}
