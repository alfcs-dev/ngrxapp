import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromActivities from '../reducers/activities.reducer';
// import * as fromActivities from './activites.selectors';

export const getProgramState = createSelector(
  fromFeature.getProgramsState,
  (state: fromFeature.ProgramsState) => state.activities
);

export const getActivitiesEntities = createSelector(
  getProgramState,
  fromActivities.getActivitiesEntities
);

export const getAllActivities = createSelector(
  getActivitiesEntities,
  entities => Object.keys(entities).map(id => entities[parseInt(id, 10)])
);

export const getActivitiesLoaded = createSelector(
  getProgramState,
  fromActivities.getActivitiesLoaded
);
export const getActivitiesLoading = createSelector(
  getProgramState,
  fromActivities.getActivitiesLoading
);
