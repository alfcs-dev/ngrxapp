import * as itemActions from '../actions/programs.actions';
import { Program } from '../../models/program.model';

export interface ProgramsState {
  entities: { [id: number]: Program };
  loaded: boolean;
  loading: boolean;
}

export const initialState: ProgramsState = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: itemActions.ProgramsAction
): ProgramsState {
  switch (action.type) {
    case itemActions.LOAD_PROGRAMS:
      return {
        ...state,
        loading: true
      };
    case itemActions.LOAD_PROGRAMS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false
      };
    case itemActions.LOAD_PROGRAMS_SUCCESS: {
      const programs = action.payload;
      const entities = programs.reduce(
        (entitiesAcc: { [id: number]: Program }, item: Program) => {
          return {
            ...entitiesAcc,
            [item.id]: item
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
    default:
      return state;
  }
}

export const getProgramsLoading = (state: ProgramsState) => state.loading;
export const getProgramsLoaded = (state: ProgramsState) => state.loaded;
export const getProgramsEntities = (state: ProgramsState) => state.entities;
