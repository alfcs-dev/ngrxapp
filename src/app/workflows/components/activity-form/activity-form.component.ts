import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormArray,
  FormBuilder,
  Validators
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import * as moment from 'moment';
import { map } from 'rxjs/operators';

import { Program } from '../../models/program.model';
import { Activity } from '../../models/activity.model';

import { ActivitiesService } from '../../services/activities.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-activity-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['activity-form.component.scss'],
  template: `
    <mat-card class="form--container">
        <form novalidate class="form" (ngSubmit)="onSubmit(form)" [formGroup]="form">
          <mat-form-field class="example-full-width">
            <input matInput placeholder="Activity name" formControlName="name"
                  [errorStateMatcher]="matcher">
            <mat-error *ngIf="form.get('name').hasError('required')">
              Name is <strong>required</strong>
            </mat-error>
        </mat-form-field>
        <div class="form--dates">
          <mat-form-field>
            <input matInput formControlName="startdate" [matDatepicker]="startdate" placeholder="Choose a start date">
            <mat-datepicker-toggle matSuffix [for]="startdate"></mat-datepicker-toggle>
            <mat-datepicker #startdate></mat-datepicker>
            </mat-form-field>
          <mat-form-field>
            <input matInput formControlName="enddate" [matDatepicker]="enddate" placeholder="Choose an end date">
            <mat-datepicker-toggle matSuffix [for]="enddate"></mat-datepicker-toggle>
            <mat-datepicker #enddate></mat-datepicker>
          </mat-form-field>
        </div>
        <button type="submit" mat-raised-button color="primary">Submit</button>
        </form>
    </mat-card>
    `
})
export class ActivityFormComponent implements OnChanges {
  exists = false;
  @Input() program: Program;
  @Input() activity: Activity;
  @Output() create = new EventEmitter<Activity>();
  @Output() update = new EventEmitter<Activity>();

  form = this.fb.group({
    name: ['', Validators.required],
    startdate: [null],
    enddate: [null]
  });
  matcher = new MyErrorStateMatcher();
  constructor(private fb: FormBuilder, private actService: ActivitiesService) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (this.activity && this.activity.id) {
      console.log(this.activity);
      this.exists = true;
      this.form.patchValue(this.activity);
    }
  }

  onSubmit({ value, valid }: { value: any; valid: boolean }) {
    const workflowlevel1 =
      this.program.url ||
      'http://dev-v2.tolaactivity.app.tola.io/api/workflowlevel1/125/';
    const startdate = value.startdate ? value.startdate.format() : '';
    const enddate = value.enddate ? value.enddate.format() : '';
    const newActivity: Activity = {
      ...value,
      workflowlevel1,
      startdate,
      enddate
    };
    this.create.emit(newActivity);
  }
}
