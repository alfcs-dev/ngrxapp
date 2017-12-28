import { Action } from '@ngrx/store';

import { Activity } from '../../models/activity.model';

// load activities
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

// create activities
export const CREATE_ACTIVITY = '[Program] Creating Activity On Workflow2';
export const CREATE_ACTIVITY_FAIL =
  '[Program] Creating Activity On Workflow2 Fail';
export const CREATE_ACTIVITY_SUCCESS =
  '[Program] Creating Activity On Workflow2 Success';

export class CreateActivity implements Action {
  readonly type = CREATE_ACTIVITY;
  constructor(public payload: Activity) {}
}

export class CreateActivityFail implements Action {
  readonly type = CREATE_ACTIVITY_FAIL;
  constructor(public payload: any) {}
}

export class CreateActivitySuccess implements Action {
  readonly type = CREATE_ACTIVITY_SUCCESS;
  constructor(public payload: Activity) {}
}

// delete activity
export const DELETE_ACTIVITY = '[Program] Deleting Activity On Workflow2';
export const DELETE_ACTIVITY_FAIL =
  '[Program] Deleting Activity On Workflow2 Fail';
export const DELETE_ACTIVITY_SUCCESS =
  '[Program] Deleting Activity On Workflow2 Success';

export class DeleteActivity implements Action {
  readonly type = DELETE_ACTIVITY;
  constructor(public payload: Activity) {}
}

export class DeleteActivityFail implements Action {
  readonly type = DELETE_ACTIVITY_FAIL;
  constructor(public payload: any) {}
}

export class DeleteActivitySuccess implements Action {
  readonly type = DELETE_ACTIVITY_SUCCESS;
  constructor(public payload: Activity) {}
}

// action types
export type ActivitiesAction =
  | LoadActivities
  | LoadActivitiesFail
  | LoadActivitiesSuccess
  | CreateActivity
  | CreateActivityFail
  | CreateActivitySuccess
  | DeleteActivity
  | DeleteActivityFail
  | DeleteActivitySuccess;
