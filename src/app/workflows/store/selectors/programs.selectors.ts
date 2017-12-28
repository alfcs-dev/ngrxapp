import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../store';
import * as fromFeature from '../reducers';
import * as fromPrograms from '../reducers/programs.reducer';
import * as fromActivities from './activities.selectors';
import { Program } from '../../models/program.model';

export const getProgramsState = createSelector(
  fromFeature.getWorkflowsState,
  (state: fromFeature.WorkflowsState) => state.programs
);

export const getProgramsEntities = createSelector(
  getProgramsState,
  fromPrograms.getProgramsEntities
);

export const getAllPrograms = createSelector(
  getProgramsEntities,
  fromActivities.getAllActivities,
  (programs, activities) => {
    const programsArray = Object.keys(programs).map(id => ({
      ...programs[parseInt(id, 10)],
      activities: activities.filter(
        act => act.workflowlevel1 === programs[parseInt(id, 10)].url
      )
    }));
    return programsArray;
  }
);

export const getSpecificProgram = createSelector(
  getProgramsEntities,
  fromRoot.getRouterState,
  (entities, router): Program =>
    router.state && entities[router.state.params.programId]
);

export const getProgramsLoaded = createSelector(
  getProgramsState,
  fromPrograms.getProgramsLoaded
);
export const getItemsLoading = createSelector(
  getProgramsState,
  fromPrograms.getProgramsLoading
);
