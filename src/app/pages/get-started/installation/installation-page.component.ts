import { Component } from '@angular/core';

@Component({
  selector: 'app-installation-page',
  templateUrl: './installation-page.component.html',
  styleUrls: ['./installation-page.component.scss'],
})
export class InstallationPageComponent {
  // Title
  title: string = 'Installation';
  description: string = 'Angular Gems contains nice components for you to be use';

  // Download
  download: string = 'npm i @lud0do1202/angular-gems';

  // App module
  appModule: string = `// Angular Gems
import { MenuXModule } from '@lud0do1202/angular-gems';

@NgModule({
  imports: [
    ...
    MenuXModule,
  ],
})
export class AppModule {}`;

  // Component
  links: string[] = ['Members', 'Customers'];
  loaded: number = 0;
  value: number = 0;
  componentHtml: string = `<gems-menu-x [links]="links" (onLinkClicked)="loaded = $event"></gems-menu-x>

<div style="text-align: center; margin-top: 0.5rem">
  <p *ngIf="loaded === 0">Component 'Members' loaded</p>
  <p *ngIf="loaded === 1">Component 'Customers' loaded</p>
</div>`;
  componentTypescript: string = `export class MenuXComponent {
  // Links
  links: string[] = ['Members', 'Customers'];

  // Component to load
  loaded: number = 0;
}`;
}
