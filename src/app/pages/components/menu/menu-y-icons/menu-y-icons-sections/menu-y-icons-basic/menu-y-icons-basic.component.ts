import { Component } from '@angular/core';
import { MenuYIconsConfig } from '@lud0do1202/angular-gems';

@Component({
  selector: 'app-menu-y-icons-basic',
  templateUrl: './menu-y-icons-basic.component.html',
  styleUrls: ['./menu-y-icons-basic.component.scss'],
})
export class MenuYIconsBasicComponent {
  /* ------------------------------- Component ------------------------------ */
  // The ref to know which component is loaded (init -> default)
  loaded: number = 0;

  // The config
  config: MenuYIconsConfig = {
    // The labels of the links
    links: ['Javascript', 'Html/CSS', 'Java', 'Python'],

    // Set the default link
    defaultActiveLink: this.loaded,
  };

  /* ---------------------------------- Doc --------------------------------- */
  // The select for showing the code
  codeAreaSelect: number = 0;

  // Html
  html: string = `<div style="display: flex; height: 500px">
  <!-- gems-menu-y-icons -->
  <gems-menu-y-icons
    [config]="config"
    (onLinkClicked)="loaded = $event"
  ></gems-menu-y-icons>

  <!-- links -->
  <div style="text-align: center; margin-left: 1rem">
    <div *ngIf="loaded === 0">Component 'Javascript' loaded</div>
    <div *ngIf="loaded === 1">Component 'Html/CSS' loaded</div>
    <div *ngIf="loaded === 2">Component 'Java' loaded</div>
    <div *ngIf="loaded === 3">Component 'Python' loaded</div>
  </div>
</div>`;

  // Typescript
  typescript: string = `import { MenuYIconsConfig } from '@lud0do1202/angular-gems';
  
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
