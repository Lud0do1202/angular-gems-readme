import { Component } from '@angular/core';
import { MenuXConfig } from '@lud0do1202/angular-gems/lib/components/menu/menu-x/menu-x-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-gems-readme';

  config: MenuXConfig = {
    links: [
      { label: 'Sales' },
      { label: 'History' },
      { label: 'Environnementaaaaaa' },
    ],
  };
}
