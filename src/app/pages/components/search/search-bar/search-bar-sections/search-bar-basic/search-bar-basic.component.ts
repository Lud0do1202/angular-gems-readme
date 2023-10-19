import { Component } from '@angular/core';
import { SearchBarConfig } from '@lud0do1202/angular-gems';

// Users
interface User {
  username: string;
  email: string;
}

@Component({
  selector: 'app-search-bar-basic',
  templateUrl: './search-bar-basic.component.html',
  styleUrls: ['./search-bar-basic.component.scss'],
})
export class SearchBarBasicComponent {
  /* ------------------------------- Component ------------------------------ */
  // Config
  config: SearchBarConfig = {
    // The items  to filter
    items: [
      {
        username: 'StarGazer42',
        email: 'stargazer42@gmail.com',
      },
      {
        username: 'LunaLark',
        email: 'lunalark@gmail.com',
      },
      {
        username: 'TechSavvy23',
        email: 'techsavvy23@gmail.com',
      },
      {
        username: 'SereneSeeker',
        email: 'sereneseeker@gmail.com',
      },
      {
        username: 'PixelPioneer',
        email: 'pixelpioneer@gmail.com',
      },
    ],

    // The filter function
    filter: (search: string, items: User[]) => {
      // To lower search
      search = search.toLowerCase();

      // Search included in lowercase username or lowercase email
      return items.filter(
        (item) =>
          item.username.toLowerCase().includes(search) ||
          item.email.toLowerCase().includes(search)
      );
    },

    // The icon (I use primeng-icons)
    icon: 'pi pi-search',

    // Placeholder
    placeholder: 'Search user',
  };

  // Users filtered
  users = this.config.items;

  /* ---------------------------------- Doc --------------------------------- */
  // The select for showing the code
  codeAreaSelect: number = 0;

  // Html
  html: string = `<!-- gems-search-bar -->
<gems-search-bar
  [config]="config"
  (filtered)="users = $event"
></gems-search-bar>

<div style="margin-top: 1rem">
  <!-- users -->
  <div *ngFor="let user of users">
    {{ user.username }} - {{ user.email }}
  </div>
</div>`;

  // Typescript
  typescript: string = `import { SearchBarConfig } from '@lud0do1202/angular-gems';

// Users
interface User {
  username: string;
  email: string;
}

// Component
export class DemoSearchBarComponent {
  // Config
  config: SearchBarConfig = {
    // The items  to filter
    items: [
      {
        username: 'StarGazer42',
        email: 'stargazer42@gmail.com',
      },
      {
        username: 'LunaLark',
        email: 'lunalark@gmail.com',
      },
      {
        username: 'TechSavvy23',
        email: 'techsavvy23@gmail.com',
      },
      {
        username: 'SereneSeeker',
        email: 'sereneseeker@gmail.com',
      },
      {
        username: 'PixelPioneer',
        email: 'pixelpioneer@gmail.com',
      },
    ],

    // The filter function
    filter: (search: string, items: User[]) => {
      // To lower search
      search = search.toLowerCase();

      // Search included in lowercase username or lowercase email
      return items.filter(
        (item) =>
          item.username.toLowerCase().includes(search) ||
          item.email.toLowerCase().includes(search)
      );
    },

    // The icon (I use primeng-icons)
    icon: 'pi pi-search',

    // Placeholder
    placeholder: 'Search user',
  };

  // Users filtered
  users = this.config.items;
}`;
}
