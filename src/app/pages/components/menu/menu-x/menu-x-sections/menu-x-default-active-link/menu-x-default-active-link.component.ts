import { Component } from '@angular/core';
import { MenuXConfig } from '@lud0do1202/angular-gems';

@Component({
  selector: 'app-menu-x-default-active-link',
  templateUrl: './menu-x-default-active-link.component.html',
  styleUrls: ['./menu-x-default-active-link.component.scss'],
})
export class MenuXDefaultActiveLinkComponent {
  /* ------------------------------- Component ------------------------------ */
  // The ref to know which component is loaded (Change the default)
  loaded: number = 3;

  // The config
  config: MenuXConfig = {
    links: ['Javascript', 'Html/CSS', 'Java', 'Python'],
    defaultActiveLink: this.loaded,
  };

  /* ---------------------------------- Doc --------------------------------- */
  // The select for showing the code
  codeAreaSelect: number = 0;

  // The html code
  html: string = `<!-- gems-menu-x -->
  <gems-menu-x
    [config]="config"
    (onLinkClicked)="loaded = $event"
  ></gems-menu-x>

  <!-- links -->
  <div style="text-align: center; margin-top: 1rem">
    <div *ngIf="loaded === 0">Component 'Javascript' loaded</div>
    <div *ngIf="loaded === 1">Component 'Html/CSS' loaded</div>
    <div *ngIf="loaded === 2">Component 'Java' loaded</div>
    <div *ngIf="loaded === 3">Component 'Python' loaded</div>
  </div>`;

  // The typescript
  typescript: string = `import { MenuXConfig } from '@lud0do1202/angular-gems';
  
export class DemoMenuXComponent {
  // The ref to know which component is loaded (Will be the default)
  loaded: number = 3;

  // The config
  config: MenuXConfig = {
    // The links
    links: ['Javascript', 'Html/CSS', 'Java', 'Python'],

    // The default component = the ref loaded
    defaultActiveLink: this.loaded,
}`;
}
