import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromItems from '../reducers/items.reducer';
import * as fromActivities from './activities.selectors';

export const getProgramState = createSelector(
  fromFeature.getProgramsState,
  (state: fromFeature.ProgramsState) => state.items
);

export const getItemsEntities = createSelector(
  getProgramState,
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
export const getItemsLoaded = createSelector(
  getProgramState,
  fromItems.getItemsLoaded
);
export const getItemsLoading = createSelector(
  getProgramState,
  fromItems.getItemsLoading
);
