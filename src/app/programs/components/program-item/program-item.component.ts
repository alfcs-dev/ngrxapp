import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-program-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-card>
      <mat-card-header>
        {{program.id}} {{program.name}}
      </mat-card-header>
      <mat-card-content>
      <mat-list *ngIf="program.activities">
        <mat-list-item *ngFor="let activity of program.activities"> 
          <mat-icon mat-list-icon>flag</mat-icon>
          <span mat-line>{{activity.name}} {{activity.id}} </span>
          <mat-icon>delete</mat-icon>
        </mat-list-item>
      </mat-list>
      </mat-card-content>
    </mat-card>
  `
})
export class ProgramItemComponent implements OnInit {
  @Input() program: any;
  ngOnInit() {
    //console.log(this.program);
  }
}
