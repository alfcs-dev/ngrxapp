import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Params
} from '@angular/router';
import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';

import * as storeRouter from '@ngrx/router-store';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface State {
  routerReducer: storeRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  routerReducer: storeRouter.routerReducer
};

export const getRouterState = createFeatureSelector<
  storeRouter.RouterReducerState<RouterStateUrl>
>('routerReducer');

export class CustomSerializer
  implements storeRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;

    return { url, queryParams, params };
  }
}
