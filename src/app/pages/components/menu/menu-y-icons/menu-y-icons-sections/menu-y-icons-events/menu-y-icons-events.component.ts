import { Component } from '@angular/core';
import { EventRow } from 'src/app/components/events-table/event-row';

@Component({
  selector: 'app-menu-y-icons-events',
  templateUrl: './menu-y-icons-events.component.html',
  styleUrls: ['./menu-y-icons-events.component.scss'],
})
export class MenuYIconsEventsComponent {
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
