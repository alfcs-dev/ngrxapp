import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../store';
import * as fromFeature from '../reducers';
import * as fromItems from '../reducers/items.reducer';
import * as fromActivities from './activities.selectors';
import { Program } from '../../models/program.model';

export const getItemsState = createSelector(
  fromFeature.getProgramsState,
  (state: fromFeature.ProgramsState) => state.items
);

export const getItemsEntities = createSelector(
  getItemsState,
  fromItems.getItemsEntities
);

export const getAllItems = createSelector(
  getItemsEntities,
  fromActivities.getAllActivities,
  (items, activities) => {
    const itemsArray = Object.keys(items).map(id => ({
      ...items[parseInt(id, 10)],
      activities: activities.filter(
        act => act.workflowlevel1 === items[parseInt(id, 10)].url
      )
    }));
    return itemsArray;
  }
);

export const getSpecificItem = createSelector(
  getItemsEntities,
  fromRoot.getRouterState,
  (entities, router): Program =>
    router.state && entities[router.state.params.programId]
);

export const getItemsLoaded = createSelector(
  getItemsState,
  fromItems.getItemsLoaded
);
export const getItemsLoading = createSelector(
  getItemsState,
  fromItems.getItemsLoading
);
