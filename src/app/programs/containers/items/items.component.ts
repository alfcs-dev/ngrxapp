import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-programs-items',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['items.component.scss'],
  template: `
    <div class="products">
      <h2>Here comes the list of programs</h2>
      <app-program-item [program]="program"></app-program-item>
    </div>
  `
})
export class ItemsComponent implements OnInit {
  program: object;
  constructor() {}

  ngOnInit() {
    this.program = {
      id: 1,
      name: 'test',
      activities: [{ id: 1, url: 'http://example.com' }]
    };
  }
}
