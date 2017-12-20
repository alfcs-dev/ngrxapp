import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';

import * as itemsReducerModule from './items.reducer';

export interface ProgramsState {
  items: itemsReducerModule.ItemsState;
}

export const reducers: ActionReducerMap<ProgramsState> = {
  items: itemsReducerModule.reducer
};

export const getProgramsState = createFeatureSelector<ProgramsState>(
  'programs'
);

export const getProgramState = createSelector(
  getProgramsState,
  (state: ProgramsState) => state.items
);

export const getProgramsEntities = createSelector(
  getProgramState,
  itemsReducerModule.getItemsEntities
);

export const getAllPrograms = createSelector(getProgramsEntities, entities =>
  Object.keys(entities).map(id => entities[parseInt(id, 10)])
);
export const getProgramsLoaded = createSelector(
  getProgramState,
  itemsReducerModule.getItemsLoaded
);
export const getProgramsLoading = createSelector(
  getProgramState,
  itemsReducerModule.getItemsLoading
);
