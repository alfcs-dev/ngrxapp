import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialElementsModule } from '../angular-material.module';

// containers
import * as containers from './containers';

// components
import * as presentational from './components';

// Services
import { ProgramsService } from './services/programs.service';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: containers.ItemsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialElementsModule,
    RouterModule.forChild(ROUTES)
  ],
  providers: [ProgramsService],
  declarations: [...containers.list, ...presentational.list],
  exports: [...containers.list]
})
export class ProgramsModule {}
