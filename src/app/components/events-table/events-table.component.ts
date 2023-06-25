import { Component, Input } from '@angular/core';
import { EventRow } from './event-row';

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.scss'],
})
export class EventsTableComponent {
  @Input() events: EventRow[] = [];
}
