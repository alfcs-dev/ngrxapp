import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as programsActions from '../actions/programs.actions';
import * as activitiesActions from '../actions/activities.actions';
import * as services from '../../services';

@Injectable()
export class ProgramsEffects {
  constructor(
    private actions$: Actions,
    private programsService: services.ProgramsService
  ) {}

  @Effect()
  loadPrograms$ = this.actions$.ofType(programsActions.LOAD_PROGRAMS).pipe(
    switchMap(() => {
      return this.programsService
        .getPrograms()
        .pipe(
          map(programs => new programsActions.LoadProgramsSuccess(programs)),
          catchError(error => of(new programsActions.LoadProgramsFail(error)))
        );
    })
  );

  @Effect()
  loadProgramsSuccess$ = this.actions$
    .ofType(programsActions.LOAD_PROGRAMS_SUCCESS)
    .pipe(map(() => new activitiesActions.LoadActivities()));
}
