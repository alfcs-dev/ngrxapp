import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as appStore from '../../store';
import { Program } from '../../models/program.model';
import { Activity } from '../../models/activity.model';

@Component({
  selector: 'app-programs',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['programs.component.scss'],
  template: `
    <div class="products">
      <h2>Here comes the list of programs</h2>
      <app-program-item
        (delete)="onDelete($event)"
        *ngFor="let program of (programs$ | async)" [program]="program"></app-program-item>
    </div>
  `
})
export class ProgramsComponent implements OnInit {
  programs$: Observable<Program[]>;
  constructor(private store: Store<appStore.WorkflowsState>) {}

  ngOnInit() {
    this.programs$ = this.store.select(appStore.getAllPrograms);
    this.store.dispatch(new appStore.LoadPrograms());
  }

  onDelete(event: Activity) {
    this.store.dispatch(new appStore.DeleteActivity(event));
  }
}
