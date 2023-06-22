import { Component } from '@angular/core';
import { MenuXConfig } from '@lud0do1202/angular-gems';

@Component({
  selector: 'app-installation',
  templateUrl: './installation.component.html',
  styleUrls: ['./installation.component.scss'],
})
export class InstallationComponent {
  // Title
  title: string = 'Installation';
  description: string = 'Angular Gems contains nice components for you to be use';

  // Download
  download: string = 'npm i @lud0do1202/angular-gems';

  // App module
  appModule: string = `
    // Angular Gems
    import { MenuXModule } from '@lud0do1202/angular-gems';

    @NgModule({
      imports: [
        // ...
        MenuXModule,
      ],
    })
    export class AppModule {}
  `;

  // Component
  loaded: number = 0;
  config: MenuXConfig = { links: [{ label: 'Members' }, { label: 'Customers' }] };
  value: string = 'html';
  componentHtml: string = `
    <gems-menu-x [config]="config" (linkClicked)="loaded = $event"></gems-menu-x>
    <div style="text-align: center">
      <p *ngIf="loaded === 0">Component Members loaded</p>
      <p *ngIf="loaded === 0">Component Customers loaded</p>
    </div>
  `;
  componentTypescript: string = `
    import { MenuXConfig } from '@lud0do1202/angular-gems/lib/components/menu/menu-x/menu-x-config';

    export class MenuXComponent {
      loaded: number = 0;
      
      config: MenuXConfig = { links: [{ label: 'Members' }, { label: 'Customers' }] };
    }
  `;
}
