import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as appStore from '../../store';
import { Program } from '../../models/program.model';

@Component({
  selector: 'app-programs-items',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['items.component.scss'],
  template: `
    <div class="products">
      <h2>Here comes the list of programs</h2>
      <app-program-item *ngFor="let program of (programs$ | async)" [program]="program"></app-program-item>
    </div>
  `
})
export class ItemsComponent implements OnInit {
  programs$: Observable<Program[]>;
  constructor(private store: Store<appStore.ProgramsState>) {}

  ngOnInit() {
    this.programs$ = this.store.select(appStore.getAllPrograms);
    this.store.dispatch(new appStore.LoadItems());
  }
}
