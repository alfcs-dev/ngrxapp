import * as itemActions from '../actions/items.actions';
import { Program } from '../../models/program.model';

export interface ItemsState {
  entities: { [id: number]: Program };
  loaded: boolean;
  loading: boolean;
}

export const initialState: ItemsState = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: itemActions.ItemsAction
): ItemsState {
  switch (action.type) {
    case itemActions.LOAD_ITEMS:
      return {
        ...state,
        loading: true
      };
    case itemActions.LOAD_ITEMS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false
      };
    case itemActions.LOAD_ITEMS_SUCCESS: {
      const items = action.payload;
      const entities = items.reduce(
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

export const getItemsLoading = (state: ItemsState) => state.loading;
export const getItemsLoaded = (state: ItemsState) => state.loaded;
export const getItemsEntities = (state: ItemsState) => state.entities;
