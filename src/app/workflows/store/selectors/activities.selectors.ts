import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../store';
import * as fromFeature from '../reducers';
import * as fromActivities from '../reducers/activities.reducer';
import { Activity } from '../../models/activity.model';

export const getActivitiesState = createSelector(
  fromFeature.getProgramsState,
  (state: fromFeature.ProgramsState) => state.activities
);

export const getActivitiesEntities = createSelector(
  getActivitiesState,
  fromActivities.getActivitiesEntities
);

export const getAllActivities = createSelector(
  getActivitiesEntities,
  entities => Object.keys(entities).map(id => entities[parseInt(id, 10)])
);

export const getSpecificActivity = createSelector(
  getActivitiesEntities,
  fromRoot.getRouterState,
  (entities, router): Activity =>
    router.state && entities[router.state.params.activityId]
);

export const getActivitiesLoaded = createSelector(
  getActivitiesState,
  fromActivities.getActivitiesLoaded
);
export const getActivitiesLoading = createSelector(
  getActivitiesState,
  fromActivities.getActivitiesLoading
);
