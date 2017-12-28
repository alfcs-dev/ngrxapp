import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';

import * as programsReducerModule from './programs.reducer';
import * as activitesReducerModule from './activities.reducer';

export interface WorkflowsState {
  programs: programsReducerModule.ProgramsState;
  activities: activitesReducerModule.ActivityState;
}

export const reducers: ActionReducerMap<WorkflowsState> = {
  programs: programsReducerModule.reducer,
  activities: activitesReducerModule.reducer
};

export const getWorkflowsState = createFeatureSelector<WorkflowsState>(
  'workflows'
);
