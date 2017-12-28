import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';

import * as itemsReducerModule from './items.reducer';
import * as activitesReducerModule from './activities.reducer';

export interface ProgramsState {
  items: itemsReducerModule.ItemsState;
  activities: activitesReducerModule.ActivityState;
}

export const reducers: ActionReducerMap<ProgramsState> = {
  items: itemsReducerModule.reducer,
  activities: activitesReducerModule.reducer
};

export const getProgramsState = createFeatureSelector<ProgramsState>(
  'programs'
);
