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
      type: 'number',
      description: ' The event emited when a link is clicked',
      comment: 'We must update the loaded property (loaded = $event)',
    },
  ];
}
