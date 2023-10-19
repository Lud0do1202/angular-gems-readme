import { Component } from '@angular/core';
import { EventRow } from 'src/app/components/events-table/event-row';

@Component({
  selector: 'app-menu-x-events',
  templateUrl: './menu-x-events.component.html',
  styleUrls: ['./menu-x-events.component.scss'],
})
export class MenuXEventsComponent {
  /* -------------------------------- Events -------------------------------- */
  events: EventRow[] = [
    {
      name: '(onLinkClicked)',
      code: `/**
* The event emited when a link is clicked
* @returns the index of link clicked
*/
@Output() onLinkClicked = new EventEmitter<number>();`,
    },
  ];
}
