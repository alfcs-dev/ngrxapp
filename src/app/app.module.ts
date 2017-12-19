import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterialElementsModule } from './angular-material.module';

import { AppComponent } from './app.component';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'programs' },
  {
    path: 'programs',
    loadChildren: './programs/programs.module#ProgramsModule'
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialElementsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
