import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-y-icons-page',
  templateUrl: './menu-y-icons-page.component.html',
  styleUrls: ['./menu-y-icons-page.component.scss'],
})
export class MenuYIconsPageComponent {
  // Title
  title: string = 'Menu Y Icons';
  description: string = 'A vertical menu with a electron <li> to create the animation';

  // Import
  import: string = "import { MenuYIconsModule } from '@lud0do1202/angular-gems';";

  // Links
  links: string[] = ['pi pi-clock', 'pi pi-user', 'pi pi-calendar', 'pi pi-chart-line'];

  // Basic
  basicLoaded: number = 0;
  basicSelect: number = 0;
  basicHtml: string = `<gems-menu-x [links]="links" (onLinkClicked)="loaded = $event"></gems-menu-x>

<div style="text-align: center; margin-top: 1rem">
<div *ngIf="loaded === 0">Component 'Sellers' loaded</div>
<div *ngIf="loaded === 1">Component 'Supervisor' loaded</div>
<div *ngIf="loaded === 2">Component 'Admins' loaded</div>
<div *ngIf="loaded === 3">Component 'Customers' loaded</div>
</div>`;
  basicTypescript: string = `import { MenuXModule } from '@lud0do1202/angular-gems';

export class DemoMenuXComponent {
// Labels of the links
links: string[] = ['Sellers', 'Supervisors', 'Admins', 'Customers'];

// The component to load (must be 0 if a default active link is not set)
loaded: number = 0;
}`;
}
