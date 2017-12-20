import { Action } from '@ngrx/store';

import { Activity } from '../../models/activity.model';

// load programs
export const LOAD_ACTIVITIES = '[Programs] Load Workflow2 Activites';
export const LOAD_ACTIVITIES_FAIL = '[Programs] Load Workflow2  Activites Fail';
export const LOAD_ACTIVITIES_SUCCESS =
  '[Programs] Load Workflow2 Activites Success';

export class LoadActivities implements Action {
  readonly type = LOAD_ACTIVITIES;
}

export class LoadActivitiesFail implements Action {
  readonly type = LOAD_ACTIVITIES_FAIL;
  constructor(public payload: any) {}
}

export class LoadActivitiesSuccess implements Action {
  readonly type = LOAD_ACTIVITIES_SUCCESS;
  constructor(public payload: Activity[]) {}
}

// action types
export type ActivitiesAction =
  | LoadActivities
  | LoadActivitiesFail
  | LoadActivitiesSuccess;
