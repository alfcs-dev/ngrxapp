import * as activitiesActions from '../actions/activities.actions';
import { Activity } from '../../models/activity.model';

export interface ActivityState {
  entities: { [id: number]: Activity };
  loaded: boolean;
  loading: boolean;
}

export const initialState: ActivityState = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: activitiesActions.ActivitiesAction
): ActivityState {
  switch (action.type) {
    case activitiesActions.LOAD_ACTIVITIES:
      return {
        ...state,
        loading: true
      };
    case activitiesActions.LOAD_ACTIVITIES_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false
      };
    case activitiesActions.LOAD_ACTIVITIES_SUCCESS: {
      const items = action.payload;
      const entities = items.reduce(
        (entitiesAcc: { [id: number]: Activity }, activity: Activity) => {
          return {
            ...entitiesAcc,
            [activity.id]: activity
          };
        },
        { ...state.entities }
      );
      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }
    case activitiesActions.CREATE_ACTIVITY_SUCCESS: {
      const activity = action.payload;
      const entities = {
        ...state.entities,
        [activity.id]: activity
      };
      return {
        ...state,
        entities
      };
    }
    default:
      return state;
  }
}

export const getActivitiesLoading = (state: ActivityState) => state.loading;
export const getActivitiesLoaded = (state: ActivityState) => state.loaded;
export const getActivitiesEntities = (state: ActivityState) => state.entities;
