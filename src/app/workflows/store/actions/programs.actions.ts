import { Action } from '@ngrx/store';

import { Program } from '../../models/program.model';

// load programs
export const LOAD_PROGRAMS = '[Workflows] Load Workflow1 Programs';
export const LOAD_PROGRAMS_FAIL = '[Workflows] Load Workflow1 Programs Fail';
export const LOAD_PROGRAMS_SUCCESS =
  '[Workflows] Load Workflow1 Programs Success';

export class LoadPrograms implements Action {
  readonly type = LOAD_PROGRAMS;
}

export class LoadProgramsFail implements Action {
  readonly type = LOAD_PROGRAMS_FAIL;
  constructor(public payload: any) {}
}

export class LoadProgramsSuccess implements Action {
  readonly type = LOAD_PROGRAMS_SUCCESS;
  constructor(public payload: Program[]) {}
}

// action types
export type ProgramsAction =
  | LoadPrograms
  | LoadProgramsFail
  | LoadProgramsSuccess;
