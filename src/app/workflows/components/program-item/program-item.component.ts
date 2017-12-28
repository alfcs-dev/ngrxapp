import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

import { Activity } from '../../models/activity.model';

@Component({
  selector: 'app-program-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['program-item.component.scss'],
  template: `
    <mat-card class="program">
      <mat-card-header>
        <mat-card-title >
          <h3>{{program.id}} {{program.name}} {{program.url}}</h3>
        </mat-card-title>
        <div class="program--new">
          <a mat-raised-button
            [routerLink]="[program.id ,'activity', 'new']">
            New Activity
          </a>
        </div>
      </mat-card-header>
      <mat-card-content>
      <mat-nav-list *ngIf="program.activities">
        <mat-list-item *ngFor="let activity of program.activities">
          <a matLine [routerLink]="[program.id, 'activity', activity.id]">{{activity.name}} {{activity.id}}</a>
          <button mat-icon-button (click)="delete.emit(activity)">
            <mat-icon>delete</mat-icon>
          </button>
        </mat-list-item>
      </mat-nav-list>
      </mat-card-content>
    </mat-card>
  `
})
export class ProgramItemComponent implements OnInit {
  @Input() program: any;
  @Output() delete = new EventEmitter<Activity>();
  ngOnInit() {}
}
