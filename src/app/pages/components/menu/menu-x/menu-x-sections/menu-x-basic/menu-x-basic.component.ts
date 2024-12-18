import { Component } from '@angular/core';
import { MenuXConfig } from '@lud0do1202/angular-gems';

@Component({
  selector: 'app-menu-x-basic',
  templateUrl: './menu-x-basic.component.html',
  styleUrls: ['./menu-x-basic.component.scss'],
})
export class MenuXBasicComponent {
  /* ------------------------------- Component ------------------------------ */
  // The ref to know which component is loaded (init -> default)
  loaded: number = 0;

  // The config
  config: MenuXConfig = {
    // The labels of the links
    links: ['Javascript', 'Html/CSS', 'Java', 'Python'],

    // Set the default link
    defaultActiveLink: this.loaded,
  };

  /* ---------------------------------- Doc --------------------------------- */
  // The select for showing the code
  codeAreaSelect: number = 0;

  // Html
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

  // Typescript
  typescript: string = `import { MenuXConfig } from '@lud0do1202/angular-gems';
  
export class DemoMenuXComponent {
  // The ref to know which component is loaded (init -> default)
  loaded: number = 0;

  // The config
  config: MenuYIconsConfig = {
    // The labels of the links
    links: ['Javascript', 'Html/CSS', 'Java', 'Python'],

    // Set the default link
    defaultActiveLink: this.loaded,
  };
}`;
}
