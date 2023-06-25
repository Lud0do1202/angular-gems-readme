import { Component, Input } from '@angular/core';
import { PropRow } from './prop-row';

@Component({
  selector: 'app-props-table',
  templateUrl: './props-table.component.html',
  styleUrls: ['./props-table.component.scss'],
})
export class PropsTableComponent {
  @Input() props: PropRow[] = [];
}
