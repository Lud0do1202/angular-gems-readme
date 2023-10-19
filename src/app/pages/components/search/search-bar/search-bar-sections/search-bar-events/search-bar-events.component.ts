import { Component } from '@angular/core';
import { EventRow } from 'src/app/components/events-table/event-row';

@Component({
  selector: 'app-search-bar-events',
  templateUrl: './search-bar-events.component.html',
  styleUrls: ['./search-bar-events.component.scss'],
})
export class SearchBarEventsComponent {
  /* -------------------------------- Events -------------------------------- */
  events: EventRow[] = [
    {
      name: '(filtered)',
      code: `/**
* The event emited every time the function filter is called (dynamicFilter)
* @returns the items filtered
*/
@Output() filtered = new EventEmitter();`,
    },
  ];
}
