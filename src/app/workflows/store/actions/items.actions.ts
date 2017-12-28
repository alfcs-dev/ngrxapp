import { Action } from '@ngrx/store';

import { Program } from '../../models/program.model';

// load programs
export const LOAD_ITEMS = '[Programs] Load Workflow1 Items';
export const LOAD_ITEMS_FAIL = '[Programs] Load Workflow1 Items Fail';
export const LOAD_ITEMS_SUCCESS = '[Programs] Load Workflow1 Items Success';

export class LoadItems implements Action {
  readonly type = LOAD_ITEMS;
}

export class LoadItemsFail implements Action {
  readonly type = LOAD_ITEMS_FAIL;
  constructor(public payload: any) {}
}

export class LoadItemsSuccess implements Action {
  readonly type = LOAD_ITEMS_SUCCESS;
  constructor(public payload: Program[]) {}
}

// action types
export type ItemsAction = LoadItems | LoadItemsFail | LoadItemsSuccess;
