import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as appStore from '../../store';
import { Program } from '../../models/program.model';
import { Activity } from '../../models/activity.model';

import { ActivitiesService } from '../../services/activities.service';

@Component({
  selector: 'app-programs-items',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['items.component.scss'],
  template: `
    <div class="products">
      <h2>Here comes the list of programs</h2>
      <app-program-item
        (delete)="onDelete($event)"
        *ngFor="let program of (programs$ | async)" [program]="program"></app-program-item>
    </div>
  `
})
export class ItemsComponent implements OnInit {
  programs$: Observable<Program[]>;
  constructor(
    private store: Store<appStore.ProgramsState>,
    private actService: ActivitiesService
  ) {}

  ngOnInit() {
    this.programs$ = this.store.select(appStore.getAllItems);
    this.store.dispatch(new appStore.LoadItems());
    //this.store.dispatch(new appStore.LoadActivities());
  }

  onDelete(event: Activity) {
    this.actService.deleteActivity(event).subscribe(r => console.log(r));
  }
}
