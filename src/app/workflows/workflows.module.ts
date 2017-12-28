import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialElementsModule } from '../material-elements.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from './store';

// containers
import * as containers from './containers';

// components
import * as presentational from './components';

// Services
import * as allServices from './services';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: containers.ItemsComponent
  },
  {
    path: ':programId/activity/new',
    component: containers.ProgramAcivityComponent
  },
  {
    path: ':programId/activity/:activityId',
    component: containers.ProgramAcivityComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialElementsModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('programs', reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [...allServices.services],
  declarations: [...containers.list, ...presentational.list],
  exports: [...containers.list, ...presentational.list]
})
export class WorkflowsModule {}
