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
        {{program.name}}
      </mat-card-header>
      <mat-card-content>
        <pre>{{program | json}}</pre>
      </mat-card-content>
    </mat-card>
  `
})
export class ProgramItemComponent implements OnInit {
  @Input() program: any;
  ngOnInit() {
    console.log('Inited children');
  }
}
